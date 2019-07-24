import Template from '../template/template';
import ITemplate from '../template/itemplate';
import Context from '../context/context';
import OutputToken from '../parser/output-token';
export default class Output extends Template<OutputToken> implements ITemplate {
    private value;
    constructor(token: OutputToken, strictFilters: boolean);
    render(ctx: Context): Promise<any>;
}
