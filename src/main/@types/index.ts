export * from './const';
import { Writable } from 'stream';

/** Color. */
export type Color = string;

/** Log level. */
export enum Level {
  ALL,
  DEBUG,
  INFO,
  WARN,
  ERROR,
  OFF
}

/** Console option. */
export interface Option {
  /** Colorful console, default to true. */
  colorful?: boolean;
  /** Path to save error. */
  fileerr?: string;
  /** Path to save output. */
  fileout?: string;
  /** Log level, default to ALL. */
  level?: Level;
  /** Logger name. */
  name: string;
  /** Standard output. */
  stdout?: Writable;
  /** Standard error. */
  stderr?: Writable;
}

/** Style. */
export interface Style {
  background: Color;
  font: Color;
  name: string;
}

/** Styles. */
export interface Styles {
  ASSERT: {
    TRUE: Style;
    FALSE: Style;
  };
  DEBUG: Style;
  INFO: Style;
  WARN: Style;
  ERROR: Style;
}
