import { useRef, useState } from "react";

// { [x: string | symbol]: any }
export function useProxyState<T extends object>(
  initialValue: T
): T {
  const [, setValue] = useState<T>(initialValue);

  const proxy = useRef(
    new Proxy(initialValue, {
      set(obj, property, newValue) {
        (obj as any)[property as any] = newValue;
        setValue(newValue);
        return true;
      },
    })
  );

  return proxy.current;
}
