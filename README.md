dalgard:reactive-map 0.1.0
=======================

ReactiveDict without the JSON.

#### Rationale

Since ReactiveDict stores everything as EJSON strings (for migration purposes), it is not possible to store functions or objects with methods.

ReactiveMap doesn't have this limitation.

#### Other differences

ReactiveMap doesn't migrate data.

The `delete` method of ReactiveDict is called `remove` in ReactiveMap, since objects are stored by reference and consequently are not guaranteed to be garbage collected.

The `changed` event of `allDeps` is fired *after* those of individual keys.

#### Notes

Setting a non-primitive value (i.e. passed by reference) always triggers a `changed` event, regardless of whether the value has been changed or not.