import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Card from './card';
import readme from './readme.md';
import selfImage from './image/cover.jpg';
import bgImage from './image/bg.png';

export const data = [
  {
    id: 1,
    link: 'https://www.google.com',
    linkTitle: 'Google',
    defultUserImage: '',
    defultBgImage: '',
    userImage: selfImage,
    bgImage: bgImage,
    userName: '孫悟空',
    introduction: '孫悟空，是小說《西遊記》中主要角色之一。又名孫行者，自封花果山美猴王、齊天大聖。曾任天官弼馬溫。玉帝後來為了招安孫悟空，承認了他自封的封號齊天大聖。取經後為如來佛祖授為鬪戰勝佛。'
  },
  {
    id: 2,
    link: 'https://www.google.com',
    linkTitle: 'Google',
    defultUserImage: '',
    defultBgImage: '',
    userImage: selfImage,
    bgImage: bgImage,
    userName: '孫悟空',
    introduction: '孫悟空，是小說《西遊記》中主要角色之一。又名孫行者，自封花果山美猴王、齊天大聖。曾任天官弼馬溫。玉帝後來為了招安孫悟空，承認了他自封的封號齊天大聖。取經後為如來佛祖授為鬪戰勝佛。'
  },
  {
    id: 3,
    link: 'https://www.google.com',
    linkTitle: 'Google',
    defultUserImage: '',
    defultBgImage: '',
    userImage: selfImage,
    bgImage: bgImage,
    userName: '孫悟空',
    introduction: '孫悟空，是小說《西遊記》中主要角色之一。又名孫行者，自封花果山美猴王、齊天大聖。曾任天官弼馬溫。玉帝後來為了招安孫悟空，承認了他自封的封號齊天大聖。取經後為如來佛祖授為鬪戰勝佛。'
  },
  {
    id: 4,
    link: 'https://www.google.com',
    linkTitle: 'Google',
    defultUserImage: '',
    defultBgImage: '',
    userImage: selfImage,
    bgImage: bgImage,
    userName: '孫悟空',
    introduction: '孫悟空，是小說《西遊記》中主要角色之一。又名孫行者，自封花果山美猴王、齊天大聖。曾任天官弼馬溫。玉帝後來為了招安孫悟空，承認了他自封的封號齊天大聖。取經後為如來佛祖授為鬪戰勝佛。'
  }
];

storiesOf('小名片', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('<Card> 小名片列表', () =>
    <div style={{
      flexWrap: 'wrap',
      display: 'flex',
      alignContent: 'flex-start',
      width: '100%',
    }}>
      {data.map((data) => 
        <Card
          key={data.id}
          link={data.link}
          linkTitle={data.linkTitle}
          userImage={data.userImage}
          bgImage={data.bgImage}
          userName={data.userName}
          introduction={data.introduction}
        />
      )}
    </div>,
    {
      notes: { markdown: readme },
    }
  );
