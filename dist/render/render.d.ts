import Context from '../context/context';
import ITemplate from '../template/itemplate';
export default class Render {
    renderTemplates(templates: ITemplate[], ctx: Context): Promise<any[]>;
}
