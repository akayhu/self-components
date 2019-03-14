# RWD(Responsive web design) 各尺寸參考

尺寸參考為`scss`方式顯示，也可拿來直接套用。使用範例：
```css
@include rwd-to(533) {
  width: 45px;
  height: 45px;
  bottom: -55px;
}
```

尺寸參考：
```css
@mixin rwd-to($media) {
  @if $media == 1366 {
    // iPad Pro(橫)
    @media only screen and (max-width: 1366px) { @content; }
  }
  @else if $media == 1280 {
    // Kindle Fire HDX(橫)、Laptop with MDPI screen(橫)、Laptop with touch(橫)
    // Nexus 10(橫)
    @media only screen and (max-width: 1280px) { @content; }
  }
  @else if $media == 1024 {
    // BlackBerry PlayBook(橫)、iPad Mini(橫)、iPad(橫)、iPad Pro(直)
    @media only screen and (max-width: 1024px) { @content; }
  }
  @else if $media == 960 {
    // Nexus 7(橫)
    @media only screen and (max-width: 960px) { @content; }
  }
  @else if $media == 950 {
    // Laptop with touch(直)
    @media only screen and (max-width: 950px) { @content; }
  }
  @else if $media == 900 {
    // Laptop with HiDPI screen(直)
    @media only screen and (max-width: 900px) { @content; }
  }
  @else if $media == 854 {
    // Nokia Lumia N9(橫)
    @media only screen and (max-width: 854px) { @content; }
  }
  @else if $media == 823 {
    // Pixel 2 XL(橫)
    @media only screen and (max-width: 823px) { @content; }
  }
  @else if $media == 812 {
    // iPhone X(橫)
    @media only screen and (max-width: 812px) { @content; }
  }
  @else if $media == 800 {
    // Kindle Fire HDX(直)、Laptop with MDPI screen(直)、Nexus 10(直)
    @media only screen and (max-width: 800px) { @content; }
  }
  @else if $media == 768 {
    // iPad Mini(直)、iPad(直)
    @media only screen and (max-width: 768px) { @content; }
  }
  @else if $media == 736 {
    // iPhone 6/7/8 Plus(橫)
    @media only screen and (max-width: 736px) { @content; }
  }
  @else if $media == 732 {
    // Nexus 5X(橫)、Nexus 6(橫)、Nexus 6P(橫)
    @media only screen and (max-width: 732px) { @content; }
  }
  @else if $media == 731 {
    // Pixel 2(橫)
    @media only screen and (max-width: 731px) { @content; }
  }
  @else if $media == 667 {
    // iPhone 6/7/8(橫)
    @media only screen and (max-width: 667px) { @content; }
  }
  @else if $media == 640 {
    // BlackBerry Z30(橫)、Galaxy Note3(橫)、Galaxy Note2(橫)、Galaxy S3(橫)
    // LG Optimus L70(橫)、Microsoft Lumia 550(橫)、Microsoft Lumia 950(橫)
    // Nexus 4(橫)、Nexus 5(橫)、Galaxy S5(橫)
    @media only screen and (max-width: 640px) { @content; }
  }
  @else if $media == 600 {
    // BlackBerry PlayBook(直)、Nexus 7(直)
    @media only screen and (max-width: 600px) { @content; }
  }
  @else if $media == 568 {
    // 、iPhone 5/SE(橫)
    @media only screen and (max-width: 568px) { @content; }
  }
  @else if $media == 533 {
    // Nokia Lumia 520(橫)
    @media only screen and (max-width: 533px) { @content; }
  }
  @else if $media == 480 {
    // Nokia Lumia N9(直)、iPhone 4(橫)
    @media only screen and (max-width: 480px) { @content; }
  }
  @else if $media == 414 {
    // iPhone 6/7/8 Plus(直)
    @media only screen and (max-width: 414px) { @content; }
  }
  @else if $media == 412 {
    // Nexus 5X(直)、Nexus 6(直)、Nexus 6P(直)
    @media only screen and (max-width: 412px) { @content; }
  }
  @else if $media == 411 {
    // Pixel 2(直)、Pixel 2 XL(直)
    @media only screen and (max-width: 411px) { @content; }
  }
  @else if $media == 384 {
    // LG Optimus L70(直)、Nexus 4(直)
    @media only screen and (max-width: 384px) { @content; }
  }
  @else if $media == 375 {
    // iPhone 6/7/8(直)、iPhone X(直)
    @media only screen and (max-width: 375px) { @content; }
  }
  @else if $media == 360 {
    // BlackBerry Z30(直)、Galaxy Note3(直)、Galaxy Note2(直)、Galaxy S3(直)
    // Microsoft Lumia 550(直)、Microsoft Lumia 950(直)、Nexus 5(直)
    // Galaxy S5(直)
    @media only screen and (max-width: 360px) { @content; }
  }
  @else if $media == 320 {
    // Nokia Lumia 520(直)、iPhone 4(直)、iPhone 5/SE(直)
    @media only screen and (max-width: 320px) { @content; }
  }
  @else {
    // Laptop with HiDPI screen(橫)
    // 預設桌機版
    @media only screen and (max-width: 1440px) { @content; }
  }
}
```