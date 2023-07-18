// Storybookのコンテキストでは、「ストーリー」は、UIコンポーネントの特定の状態を表現するものを指します。
// ストーリーは、コンポーネントの一つの「バージョン」または「ビュー」を示し、それぞれのストーリーはコンポーネントがどのように見えるか、またはどのように動作するかを示します。

// 例）ボタンコンポーネントの場合:
// デフォルトのボタン
// disable状態のボタン
// ホバー状態のボタン
// クリックされたボタン

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  // Storybookが読み込むストーリーファイルのパスを指定
  stories: ["../src/components/**/*.stories.@(js|jsx)"],
  // 静的ファイルを提供するディレクトリのパスを指定
  staticDirs: ["../public"],
  // アドオンとは、ソフトウェアの基本的な機能を拡張するための追加モジュールやプラグインのこと
  addons: [
    // Storybook内の異なるストーリー間でリンクを作成することを可能に
    "@storybook/addon-links",
    // Storybookのエコシステムで最も一般的に使用されるアドオンのセットを提供
    "@storybook/addon-essentials",
    // ユーザーのインタラクションとその結果を視覚的にテストするためのツールを提供
    "@storybook/addon-interactions",
    // アクセシビリティ（a11y）のチェックを行う
    "@storybook/addon-a11y",
  ],
  // 使用するフレームワークとそのオプションを指定
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  // ドキュメンテーションの生成に関する設定を指定
  docs: {
    autodocs: "tag",
  },
};
export default config;
