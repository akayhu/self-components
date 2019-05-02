# React prop-types 型別檢查

javascript 是弱型別，所以在型別錯誤時不會顯示錯誤，所以近幾年才會開發出 TypeScript 這種強型別的 js，可以在開發時期顯示警告，編輯時期出現錯誤訊息來減少 js 出錯的機會。在 react 也有類似的型別檢查套件，型別檢查套件 prop-types 可以在開發時期進行檢查，它一樣會在 console 顯示警告訊息。prop-types 包含:基本型別、陣列、物件...等，都能進行型別檢查。基本上大部份的型別都有支援語法撰寫也很簡潔，不需附加太多程式碼就能檢查型別。

npm 網址：[https://www.npmjs.com/package/prop-types](https://www.npmjs.com/package/prop-types)

## 寫法用法參考

```js
import PropTypes from 'prop-types';

class propTypesComponent extends Component {
	static propTypes = {
		startYear: PropTypes.number,
		startMonth: PropTypes.number,
		endYear: PropTypes.number,
		endMonth: PropTypes.number,
		onUpdateData: PropTypes.func,
		showStillWorking: PropTypes.bool,
		showSeniority: PropTypes.bool,
		stillWorking: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
		stillWorkingText: PropTypes.string,
		editable: PropTypes.bool,
		title: PropTypes.string,
		popoverClassName: PropTypes.string,
		dashClassName: PropTypes.string,
		seniorityClassName: PropTypes.string,
	};

	// 內容 ...
}
```
