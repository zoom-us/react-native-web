/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import { useImperativeHandle } from 'react';
import UIManager from '../../exports/UIManager';
import createDOMProps from '../../modules/createDOMProps';

const createHandle = (ref, classList, style) => {
  let previousStyle;

  return {
    blur() {
      UIManager.blur(ref.current);
    },
    focus() {
      UIManager.focus(ref.current);
    },
    measure(callback) {
      UIManager.measure(ref.current, callback);
    },
    measureLayout(relativeToNativeNode, onFail, onSuccess) {
      UIManager.measureLayout(ref.current, relativeToNativeNode, onFail, onSuccess);
    },
    measureInWindow(callback) {
      UIManager.measureInWindow(ref.current, callback);
    },
    setNativeProps(nativeProps) {
      const node = ref.current;
      if (node && nativeProps) {
        const domProps = createDOMProps(null, {
          ...nativeProps,
          classList: [nativeProps.className, classList],
          style: [style, nativeProps.style]
        });

        const nextDomStyle = domProps.style;

        if (previousStyle != null) {
          if (domProps.style == null) {
            domProps.style = {};
          }
          for (const styleName in previousStyle) {
            if (domProps.style[styleName] == null) {
              domProps.style[styleName] = '';
            }
          }
        }

        previousStyle = nextDomStyle;

        UIManager.updateView(node, domProps);
      }
    }
  };
};
export default function usePlatformMethods(ref, forwardedRef, classList, style) {
  useImperativeHandle(forwardedRef, () => createHandle(ref, classList, style), [
    ref,
    forwardedRef,
    classList,
    style
  ]);
}
