import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { doc } from 'storybook-readme';
import DatePicker from './datePicker';
import readme from './readme.md';

export const data = {
  id: 1,
  startYear: 1998,
  startMonth: 6,
  endYear: 2015,
  endMonth: 6,
};

export const actions = {
  submitEditable: action('submitEditable'),
};

storiesOf('Popover時間選擇器', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('說明文件', doc(readme))
  .add('<DatePicker> 編輯狀態', () => <DatePicker
      key={data.id}
      startYear={data.startYear}
      startMonth={data.startMonth}
      endYear={data.endYear}
      endMonth={data.endMonth}
      onUpdateData={actions.submitEditable}
      editable={true}
      title="時間"
    />
  );
