import { useState } from "react";

// This is similar to react-use but uses updaterFns to prevent unnecessary renders

export function useList<T>(initialState: Array<T> = [] ) : [Array<T>, any] {
  const [list, setList] = useState<Array<T>>(initialState);

  const updateList = {
    set: (newList) => {
      setList(newList);
    },
    filter: (predicate) => {
      setList((list) => {
        return list.filter(predicate);
      });
    },
    push: (...items) => {
      setList((list) => {
        return [...list, ...items];
      });
    },
    update: (updaterFnOrObj, predicate = (x, i) => true) => {
      setList((list) => {
        return list.map((item, i) => {
          if (predicate(item, i)) {
            if (typeof updaterFnOrObj === 'function') {
              return updaterFnOrObj(item);
            }
            if (typeof updaterFnOrObj === 'object') {
              return {
                ...item,
                ...updaterFnOrObj
              }
            }
            return updaterFnOrObj
          }
          return item;
        });
      });
    },
    updateAt: (index, updaterFnOrObj) => {
      setList((list) => {
        return list.map((item, i) => {
          if (i === index) {
            if (typeof updaterFnOrObj === 'function') {
              return updaterFnOrObj(item);
            }
            if (typeof updaterFnOrObj === 'object') {
              return {
                ...item,
                ...updaterFnOrObj
              }
            }
            return updaterFnOrObj
          }
          return item;
        });
      });
    },
    removeAt: (index) => {
      setList((list) => {
        return list.filter((item, i) => i !== index);
      });
    },
  }
  return [list, updateList];
}
