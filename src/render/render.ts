import { RenderError } from '../util/error'
import { stringify } from '../util/underscore'
import assert from '../util/assert'
import Context from '../context/context'
import ITemplate from '../template/itemplate'

export default class Render {
  public async renderTemplates (templates: ITemplate[], ctx: Context) {
    assert(ctx, 'unable to evalTemplates: context undefined')

    const html: any[] = []
    for (const tpl of templates) {
      try {
        const output = await tpl.render(ctx)
        html.push(output)
      } catch (e) {
        if (e.name === 'RenderBreakError') {
          e.resolvedHTML = String(html.map(h => stringify(h)).join(''))
          throw e
        }
        throw e.name === 'RenderError' ? e : new RenderError(e, tpl)
      }
    }
    return html
  }
}
