# px 與 em 轉換

網頁的默認像素大小通常為 16px，以下為 16px 轉換

## px 與 em 百分比轉換表

| px   | em       | percent |
| ---- | -------- | ------- |
| 5px  | 0.3125em | 31.25%  |
| 6px  | 0.3750em | 37.50%  |
| 7px  | 0.4375em | 43.75%  |
| 8px  | 0.5000em | 50.00%  |
| 9px  | 0.5625em | 56.25%  |
| 10px | 0.6250em | 62.50%  |
| 11px | 0.6875em | 68.75%  |
| 12px | 0.7500em | 75.00%  |
| 13px | 0.8125em | 81.25%  |
| 14px | 0.8750em | 87.50%  |
| 15px | 0.9375em | 93.75%  |
| 16px | 1.0000em | 100%    |
| 17px | 1.0625em | 106.25% |
| 18px | 1.1250em | 112.50% |
| 19px | 1.1875em | 118.75% |
| 20px | 1.2500em | 125.00% |
| 21px | 1.3125em | 131.25% |
| 22px | 1.3750em | 137.50% |
| 23px | 1.4375em | 143.75% |
| 24px | 1.5000em | 150.00% |
| 25px | 1.5625em | 156.25% |

> PX，EM 和百分比有什麼區別？
>
> 像素是靜態測量，而百分比和 EM 是相對測量。EM 或百分比的大小取決於其父級。如果正文的文本大小是 16 像素，那麼 150％或 1.5 EM 將是 24 像素（1.5 \* 16）。查看 CSS 單位以獲取更多測量單位。

如果不是以 16px 為基準，可至[這裡](https://www.w3schools.com/tags/ref_pxtoemconversion.asp)進行查詢。

## 補充

### 單位

> px：絕對單位，代表螢幕中每個「點」( pixel )。

> em：相對單位，每個子元素透過「倍數」乘以父元素的 px 值。

> rem：相對單位，每個元素透過「倍數」乘以根元素的 px 值。

> %：相對單位，每個子元素透過「百分比」乘以父元素的 px 值。

### 屬性名稱

> medium：預設值，等於 16px ( h4 預設值 )

> xx-small：medium 的 0.6 倍 ( h6 預設值 )

> x-small：medium 的 0.75 倍

> small：medium 的 0.8 倍 ( h5 預設值，W3C 定義為 0.89，實測約為 0.8 )

> large：medium 的 1.1 倍 ( h3 預設值，W3C 定義為 1.2，實測約為 1.1 )

> x-large：medium 的 1.5 倍 ( h2 預設值 )

> xx-large：medium 的 2 倍 ( h1 預設值 )

> smaller：約為父層的 80%

> larger：約為父層的 120%

### 印刷

> pt：印表機的每個「點」，定義為 1 pt ＝ 1/72 in，如果在 72 dpi 的系統上 1 px = 1 pt，但如果在 96 dpi 的系統上 1 px = 0.75 pt ( 72/96 = 0.75 )。

> in：英吋，在 96 dpi 的系統上 1 in = 96 px。

> cm：公分，在 96 dpi 的系統上 1 cm = 37.795275593333 px。

> mm：公釐，在 96 dpi 的系統上 1 cm = 3.7795275593333 px。
