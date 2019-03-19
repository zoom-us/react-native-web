/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import { useLayoutEffect } from 'react';
import UIManager from '../../exports/UIManager';

const DOM_LAYOUT_HANDLER_NAME = '__reactLayoutHandler';

let resizeObserver = null;

function getResizeObserver(): ResizeObserver {
  if (resizeObserver == null) {
    resizeObserver = new ResizeObserver(function(entries) {
      entries.forEach(entry => {
        // $FlowFixMe
        const node = entry.target;
        if (typeof node[DOM_LAYOUT_HANDLER_NAME] === 'function') {
          UIManager.measure(node, (x, y, width, height, left, top) => {
            const event = {
              nativeEvent: {
                layout: { x, y, width, height, left, top }
              },
              timeStamp: Date.now()
            };
            Object.defineProperty(event.nativeEvent, 'target', {
              enumerable: true,
              get: () => entry.target
            });
            node[DOM_LAYOUT_HANDLER_NAME](event);
          });
        }
      });
    });
  }
  return resizeObserver;
}

export default function useResizeObserver(ref, onLayout) {
  const observer = getResizeObserver();

  useLayoutEffect(
    () => {
      const node = ref.current;
      if (node != null && typeof onLayout === 'function') {
        observer.observe(node);
        // $FlowFixMe
        node[DOM_LAYOUT_HANDLER_NAME] = onLayout;
      }
      return () => {
        const node = ref.current;
        if (node != null) {
          observer.unobserve(node);
          // $FlowFixMe
          delete node[DOM_LAYOUT_HANDLER_NAME];
        }
      };
    },
    [ref, onLayout]
  );
}
