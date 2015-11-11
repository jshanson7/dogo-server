import { listForModel } from './list';
import { showForModel } from './show';
import { createForModel } from './create';
import { destroyForModel } from './destroy';

export function methodsForModel(Model) {
  return {
    list: listForModel(Model),
    show: showForModel(Model),
    create: createForModel(Model),
    destroy: destroyForModel(Model)
  };
}
