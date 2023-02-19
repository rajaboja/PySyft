'use strict';
/**
 * This file has been automatically generated by the [capnpc-ts utility](https://github.com/jdiaz5513/capnp-ts).
 */
import * as capnp from 'capnp-ts';
import * as capnp_ts_1 from 'capnp-ts';

export const _capnpFileId = BigInt('0x979a7994b9718d24');
export class Iterable extends capnp_ts_1.Struct {
  /**
   * @param {capnp.Orphan<capnp.Pointer>} value
   */
  adoptValues(value) {
    capnp_ts_1.Struct.adopt(value, capnp_ts_1.Struct.getPointer(0, this));
  }
  disownValues() {
    return capnp_ts_1.Struct.disown(this.getValues());
  }
  getValues() {
    return capnp_ts_1.Struct.getList(0, capnp.DataList, this);
  }
  hasValues() {
    return !capnp_ts_1.Struct.isNull(capnp_ts_1.Struct.getPointer(0, this));
  }
  /**
   * @param {number} length
   */
  initValues(length) {
    return capnp_ts_1.Struct.initList(0, capnp.DataList, length, this);
  }
  /**
   * @param {capnp.Pointer} value
   */
  setValues(value) {
    capnp_ts_1.Struct.copyFrom(value, capnp_ts_1.Struct.getPointer(0, this));
  }
  toString() {
    return 'Iterable_' + super.toString();
  }
}
Iterable._capnp = {
  displayName: 'Iterable',
  id: 'bca6aae15eaab9b2',
  size: new capnp_ts_1.ObjectSize(0, 1)
};
