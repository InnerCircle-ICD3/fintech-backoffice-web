import { ComponentType, ReactNode } from 'react';

type ComponentProps = {
  children?: ReactNode;
  [key: string]: unknown;
};

/**
 * 컴포넌트를 지연 로딩하기 위한 유틸리티 함수
 * @param factory 컴포넌트를 import하는 함수
 * @param exportName 내보낸 이름 (기본값: 'default')
 * @returns React Router의 lazy 함수에서 사용할 수 있는 객체를 반환하는 함수
 */
export function lazyImport<T extends Record<K, ComponentType<ComponentProps>>, K extends keyof T>(
  factory: () => Promise<T>,
  exportName: K = 'default' as K
) {
  return async () => {
    const module = await factory();
    return { Component: module[exportName] };
  };
}
