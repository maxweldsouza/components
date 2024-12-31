import { useState } from "react";

export function useList<T>(initialState: Array<T> = [] ) {
  const [list, setList] = useState<Array<T>>(initialState);

  return [
    list,
    {
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
    },
  ];
}
