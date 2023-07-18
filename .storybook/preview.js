import "../src/index.css";

/** @type { import('@storybook/react').Preview } */
const preview = {
  // parametersフィールド: ストーリーの表示方法をカスタマイズするためのパラメータを定義
  parameters: {
    // コンポーネントのイベントハンドラ（例えば、onClickやonSubmitなど）がユーザーのインタラクションを模擬するためのアクションに自動的にマッピング
    // StorybookのUI上でこれらのアクションをトリガーすることで、それらがコンポーネントの状態にどのような影響を与えるかを視覚的に確認可能に
    actions: { argTypesRegex: "^on[A-Z].*" },
    // コンポーネントの引数を動的に編集するためのUIを提供
    controls: {
      // matchers: 特定の引数を特定のタイプのコントロールとして扱うためのマッチングルールを定義
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
