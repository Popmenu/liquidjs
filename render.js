module.exports = function(Filter, Tag) {
    function render(tokens, ctx) {
        var html = '';
        while (tokens.length) {
            var token = tokens.shift();
            switch (token.type) {
                case 'html':
                    html += token.value;
                    break;
                case 'output':
                    html += evaluate(token.value, ctx);
                    break;
                case 'tag':
                    html += renderTag(token, tokens, ctx);
                    break;
                default:
                    throw new Error(`unexpected type: ${token.type}`);
            }
        }
        return html;
    }

    function evaluate(str, ctx) {
        var filters = str.split('|');
        var val = ctx.get(filters.shift());
        return filters
            .map(str => Filter.parse(str))
            .reduce((v, filter) => filter.render(v, ctx), val);
    }

    function renderTag(token, tokens, ctx) {
        var tag = Tag.parse(token.value),
            subTokens = [];
        if (tag.needClose) {
            var curToken, endToken = 'end' + tag.name;
            while ((curToken = tokens.shift()).value !== endToken) {
                subTokens.push(curToken);
            }
            if (curToken.value !== endToken) {
                throw new Error(`${token.value} not closed`);
            }
        }
        return tag.render(subTokens, ctx);
    }

    return {
        render, evaluate, renderTag
    };
};
