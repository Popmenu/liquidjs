import Value from './value'
import { dangerouslyStringify, toValue } from '../util/underscore'
import Template from '../template/template'
import ITemplate from '../template/itemplate'
import Context from '../context/context'
import OutputToken from '../parser/output-token'

export default class Output extends Template<OutputToken> implements ITemplate {
  private value: Value
  public constructor (token: OutputToken, strictFilters: boolean) {
    super(token)
    this.value = new Value(token.value, strictFilters)
  }
  public async render (ctx: Context): Promise<any> {
    const val = await this.value.value(ctx)
    return dangerouslyStringify(toValue(val))
  }
}
