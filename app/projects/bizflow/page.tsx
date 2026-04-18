import React from 'react';
import { Layout, Palette, Code, MousePointer2, Layers } from 'lucide-react';

export default function BizFlowStudio() {
  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      {/* 左侧：组件库面板 */}
      <aside className="w-64 bg-white border-r border-slate-200 p-4 flex flex-col gap-6">
        <div className="font-bold text-lg flex items-center gap-2 text-blue-600">
          <Layout size={20} /> BizFlow Studio
        </div>
        
        <div className="space-y-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">设计资产</p>
          {['导航栏', '数据卡片', '详情表单', '业务看板'].map((item) => (
            <div key={item} className="p-3 border border-dashed border-slate-300 rounded-lg cursor-grab hover:bg-blue-50 hover:border-blue-400 transition-all text-sm flex items-center gap-2">
              <Layers size={14} /> {item}
            </div>
          ))}
        </div>
      </aside>

      {/* 中间：画布预览区 */}
      <main className="flex-1 p-8 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs shadow-sm text-slate-500">
              视口尺寸: 1440px
            </span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Code size={16} /> 生成代码
          </button>
        </div>

        {/* 模拟画布 */}
        <div className="flex-1 bg-white rounded-xl shadow-2xl border border-slate-200 relative overflow-hidden flex items-center justify-center border-dashed">
          <div className="text-center group cursor-pointer">
            <div className="w-64 h-32 bg-blue-100 rounded-lg border-2 border-blue-500 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
               <MousePointer2 className="text-blue-500 animate-bounce" />
            </div>
            <p className="text-slate-500 text-sm">点击或拖拽组件到此处开始搭建</p>
          </div>
        </div>
      </main>

      {/* 右侧：属性调节面板 */}
      <aside className="w-72 bg-white border-l border-slate-200 p-4">
        <div className="flex items-center gap-2 mb-6 font-semibold border-b pb-4">
          <Palette size={18} /> 样式配置
        </div>
        <div className="space-y-6">
          <section>
            <label className="text-xs text-slate-400 mb-2 block">品牌主色</label>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white ring-2 ring-blue-100 shadow-sm cursor-pointer" />
              <div className="w-8 h-8 rounded-full bg-indigo-600 cursor-pointer" />
              <div className="w-8 h-8 rounded-full bg-slate-900 cursor-pointer" />
            </div>
          </section>
          <section>
            <label className="text-xs text-slate-400 mb-2 block">圆角半径 (Radius)</label>
            <input type="range" className="w-full accent-blue-600" />
          </section>
        </div>
      </aside>
    </div>
  );
}
