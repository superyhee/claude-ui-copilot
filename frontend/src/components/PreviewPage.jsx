import React, { useState, useCallback } from 'react';
import { Tree } from 'react-d3-tree';

const initData = {
  name: '人工智能',
  children: [
    {
      name: '机器学习',
      children: [
        { name: '监督学习' },
        { name: '无监督学习' },
        { name: '强化学习' },
      ],
    },
    {
      name: '深度学习',
      children: [
        { name: '神经网络' },
        { name: '卷积神经网络' },
        { name: '循环神经网络' },
      ],
    },
    {
      name: '自然语言处理',
      children: [
        { name: '语音识别' },
        { name: '机器翻译' },
        { name: '文本分析' },
      ],
    },
    {
      name: '计算机视觉',
      children: [
        { name: '图像识别' },
        { name: '物体检测' },
        { name: '人脸识别' },
      ],
    },
  ],
};

const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps
}) => (
  <g>
    <circle r={15}></circle>
    <foreignObject {...foreignObjectProps}>
      <div className="nodeName bg-white p-2 rounded shadow cursor-move">
        <h3 className="text-sm font-semibold">{nodeDatum.name}</h3>
        {nodeDatum.children && (
          <button className="text-xs text-blue-500" onClick={toggleNode}>
            {nodeDatum.__rd3t.collapsed ? 'Expand' : 'Collapse'}
          </button>
        )}
      </div>
    </foreignObject>
  </g>
);

export default function App() {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [treeData, setTreeData] = useState(initData);

  const onNodeMove = useCallback((node, data) => {
    const newData = JSON.parse(JSON.stringify(treeData));
    const updateNode = (currentNode) => {
      if (currentNode.name === node.data.name) {
        currentNode.x = data.x;
        currentNode.y = data.y;
        return true;
      }
      if (currentNode.children) {
        return currentNode.children.some(updateNode);
      }
      return false;
    };
    updateNode(newData);
    setTreeData(newData);
  }, [treeData]);

  return (
    <div className="w-full h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">人工智能发展脑图</h1>
      <div className="w-full h-5/6 border border-gray-300 rounded-lg shadow-lg bg-white overflow-hidden">
        <Tree
          data={treeData}
          translate={translate}
          orientation="vertical"
          renderCustomNodeElement={(rd3tProps) =>
            renderForeignObjectNode({ ...rd3tProps, foreignObjectProps: { width: 120, height: 60, x: -60, y: -30 } })
          }
          onUpdate={(newData) => setTreeData(newData)}
          onNodeMove={onNodeMove}
          enableLegacyTransitions={true}
          separation={{ siblings: 2, nonSiblings: 2 }}
          zoomable={true}
          draggable={true}
          collapsible={true}
        />
      </div>
      <div className="mt-4 text-sm text-gray-600">
        提示：可以拖拽节点移动位置，点击节点可以展开/收起子节点
      </div>
    </div>
  );
}