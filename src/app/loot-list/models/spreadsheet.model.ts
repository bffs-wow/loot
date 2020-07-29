export interface BackgroundColor {
  red: number;
  green: number;
  blue: number;
}

export interface Padding {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface ForegroundColor {
}

export interface RgbColor {
  red: number;
  green: number;
  blue: number;
}

export interface ForegroundColorStyle {
  rgbColor: RgbColor;
}

export interface TextFormat {
  foregroundColor: ForegroundColor;
  fontFamily: string;
  fontSize: number;
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  foregroundColorStyle: ForegroundColorStyle;
}

export interface BackgroundColorStyle {
  rgbColor: RgbColor;
}

export interface DefaultFormat {
  backgroundColor: BackgroundColor;
  padding: Padding;
  verticalAlignment: string;
  wrapStrategy: string;
  textFormat: TextFormat;
  backgroundColorStyle: BackgroundColorStyle;
}

export interface Color {
  rgbColor: RgbColor;
}

export interface ThemeColor {
  colorType: string;
  color: Color;
}

export interface SpreadsheetTheme {
  primaryFontFamily: string;
  themeColors: ThemeColor[];
}

export interface Properties {
  title: string;
  locale: string;
  autoRecalc: string;
  timeZone: string;
  defaultFormat: DefaultFormat;
  spreadsheetTheme: SpreadsheetTheme;
}

export interface GridProperties {
  rowCount: number;
  columnCount: number;
}

export interface Merge {
  sheetId: number;
  startRowIndex: number;
  endRowIndex: number;
  startColumnIndex: number;
  endColumnIndex: number;
}

export interface Range {
  startRowIndex: number;
  endRowIndex: number;
  startColumnIndex: number;
  endColumnIndex: number;
}

export interface Condition {
  type: string;
}

export interface Format {
  backgroundColor: BackgroundColor;
  backgroundColorStyle: BackgroundColorStyle;
}

export interface BooleanRule {
  condition: Condition;
  format: Format;
}

export interface ConditionalFormat {
  ranges: Range[];
  booleanRule: BooleanRule;
}

export interface Sheet {
  properties: Properties;
  merges: Merge[];
  conditionalFormats: ConditionalFormat[];
}

export interface Sheet {
  spreadsheetId: string;
  properties: Properties;
  sheets: Sheet[];
  spreadsheetUrl: string;
}

