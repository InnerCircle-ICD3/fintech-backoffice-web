import type { ReactNode } from 'react';
import { createContext } from 'react';

const noop = () => {};

export interface OverlayProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

type OverlayRenderFn = (props: OverlayProps) => ReactNode;

export type OpenOverlayFn = (renderOverlay: OverlayRenderFn) => () => void;

export interface OverlayState {
  /** 오버레이 상태 */
  isOpen: boolean;
  /** 오버레이를 렌더링하는 함수 */
  renderOverlay: OverlayRenderFn;
  /** 오버레이를 닫는 함수 */
  onRequestClose: () => void;
}

export const OverlayContext = createContext<OpenOverlayFn>(() => noop);
