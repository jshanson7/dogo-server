import { listForModel } from './list';
import { showForModel } from './show';
import { createForModel } from './create';
import { destroyForModel } from './destroy';

export function restMethods({Model, defaultParams}) {
  return {
    list: listForModel(Model, defaultParams.list),
    show: showForModel(Model, defaultParams.show),
    create: createForModel(Model),
    destroy: destroyForModel(Model)
  };
}
