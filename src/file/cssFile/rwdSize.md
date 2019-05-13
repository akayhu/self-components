# RWD(Responsive web design) 各尺寸參考

### 不同數值所對應的裝置

| 尺寸大小    | 裝置                                                                                                                                                                                     |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1440 (預設) | Laptop with HiDPI screen(橫)                                                                                                                                                             |
| 1366        | iPad Pro(橫)                                                                                                                                                                             |
| 1280        | Kindle Fire HDX(橫)、Laptop with MDPI screen(橫)、Laptop with touch(橫)、 Nexus 10(橫)                                                                                                   |
| 1024        | BlackBerry PlayBook(橫)、iPad Mini(橫)、iPad(橫)、iPad Pro(直)                                                                                                                           |
| 960         | Nexus 7(橫)                                                                                                                                                                              |
| 950         | Laptop with touch(直)                                                                                                                                                                    |
| 900         | Laptop with HiDPI screen(直)                                                                                                                                                             |
| 854         | Nokia Lumia N9(橫)                                                                                                                                                                       |
| 823         | Pixel 2 XL(橫)                                                                                                                                                                           |
| 812         | iPhone X(橫)                                                                                                                                                                             |
| 800         | Kindle Fire HDX(直)、Laptop with MDPI screen(直)、Nexus 10(直)                                                                                                                           |
| 768         | iPad Mini(直)、iPad(直)                                                                                                                                                                  |
| 736         | iPhone 6/7/8 Plus(橫)                                                                                                                                                                    |
| 732         | Nexus 5X(橫)、Nexus 6(橫)、Nexus 6P(橫)                                                                                                                                                  |
| 731         | Pixel 2(橫)                                                                                                                                                                              |
| 667         | iPhone 6/7/8(橫)                                                                                                                                                                         |
| 640         | BlackBerry Z30(橫)、Galaxy Note3(橫)、Galaxy Note2(橫)、Galaxy S3(橫)、Nexus 4(橫)、<br>LG Optimus L70(橫)、Microsoft Lumia 550(橫)、Microsoft Lumia 950(橫)、Nexus 5(橫)、Galaxy S5(橫) |
| 600         | BlackBerry PlayBook(直)、Nexus 7(直)                                                                                                                                                     |
| 568         | iPhone 5/SE(橫)                                                                                                                                                                          |
| 533         | Nokia Lumia 520(橫)                                                                                                                                                                      |
| 480         | Nokia Lumia N9(直)、iPhone 4(橫)                                                                                                                                                         |
| 414         | iPhone 6/7/8 Plus(直)                                                                                                                                                                    |
| 412         | Nexus 5X(直)、Nexus 6(直)、Nexus 6P(直)                                                                                                                                                  |
| 411         | Pixel 2(直)、Pixel 2 XL(直)                                                                                                                                                              |
| 384         | LG Optimus L70(直)、Nexus 4(直)                                                                                                                                                          |
| 375         | iPhone 6/7/8(直)、iPhone X(直)                                                                                                                                                           |
| 360         | BlackBerry Z30(直)、Galaxy Note3(直)、Galaxy Note2(直)、Galaxy S3(直)、Microsoft Lumia 550(直)、<br>Microsoft Lumia 950(直)、Nexus 5(直)、Galaxy S5(直)                                  |
| 320         | Nokia Lumia 520(直)、iPhone 4(直)、iPhone 5/SE(直)                                                                                                                                       |

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
@mixin rwd-to($media: null) {
	@if $media {
		@media only screen and (max-width: $media + 'px') {
			@content;
		}
	} @else {
		// 預設桌機版
		@media only screen and (max-width: 1440px) {
			@content;
		}
	}
}
```
