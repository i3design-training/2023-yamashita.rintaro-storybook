import React from "react";

import Task from "./Task";

// Storybook にコンポーネントを認識させる
export default {
  component: Task, // コンポーネント自体
  title: "Task", // Storybook のサイドバーにあるコンポーネントを参照する方法
};

// Arguments (略して args) を使用することで、
// コントロールアドオンを通して、Storybook を再起動することなく、
// コンポーネントを動的に編集することができるようになります。
// args の値が変わるとコンポーネントもそれに合わせて変わります。
const Template = (args) => <Task {...args} />;

// Defaultという新しいStoryを作成
// Template.bind({}) は関数のコピーを作成する
// Default.argsは、Taskコンポーネントに渡す引数を設定
export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
