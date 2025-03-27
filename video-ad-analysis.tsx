import React from 'react';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const VideoAdAnalysis = () => {
  // Device performance data
  const deviceData = [
    {
      device: 'コンピュータ',
      totalCost: 6753,
      totalViews: 3119,
      avgViewRate: 67.38,
      costPerView: 2.17,
      cpm: 1455.39
    },
    {
      device: 'スマートフォン',
      totalCost: 1238,
      totalViews: 648,
      avgViewRate: 79.35,
      costPerView: 1.91,
      cpm: 1236.76
    },
    {
      device: 'タブレット',
      totalCost: 2762,
      totalViews: 1547,
      avgViewRate: 65.23,
      costPerView: 1.79,
      cpm: 1163.44
    },
    {
      device: 'テレビ画面',
      totalCost: 8149,
      totalViews: 3833,
      avgViewRate: 64.39,
      costPerView: 2.13,
      cpm: 1364.31
    }
  ];

  // Gender performance data
  const genderData = [
    {
      gender: '男性',
      totalCost: 10710,
      totalViews: 5174,
      avgViewRate: 68.36,
      costPerView: 2.07,
      cpm: 1344.80
    },
    {
      gender: '女性',
      totalCost: 8192,
      totalViews: 3973,
      avgViewRate: 69.83,
      costPerView: 2.06,
      cpm: 1359.89
    }
  ];

  // Date performance data
  const dateData = [
    {
      date: '2025-03-12',
      totalCost: 6202,
      totalViews: 2837,
      avgViewRate: 64.45,
      costPerView: 2.19,
      cpm: 1431.01
    },
    {
      date: '2025-03-13',
      totalCost: 6373,
      totalViews: 3187,
      avgViewRate: 71.65,
      costPerView: 2.00,
      cpm: 1334.94
    },
    {
      date: '2025-03-20',
      totalCost: 6327,
      totalViews: 3123,
      avgViewRate: 71.17,
      costPerView: 2.03,
      cpm: 1296.52
    }
  ];

  // Top performers data
  const topViewRateData = [
    {
      combination: 'スマートフォン - 女性',
      avgViewRate: 79.90,
      costPerView: 2.04
    },
    {
      combination: 'スマートフォン - 男性',
      avgViewRate: 78.80,
      costPerView: 1.83
    },
    {
      combination: 'コンピュータ - 男性',
      avgViewRate: 67.83,
      costPerView: 2.19
    }
  ];

  const topCostEfficiencyData = [
    {
      combination: 'タブレット - 男性',
      avgViewRate: 64.39,
      costPerView: 1.79
    },
    {
      combination: 'タブレット - 女性',
      avgViewRate: 66.07,
      costPerView: 1.79
    },
    {
      combination: 'スマートフォン - 男性',
      avgViewRate: 78.80,
      costPerView: 1.83
    }
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">動画広告キャンペーン分析</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">デバイス別パフォーマンス</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">視聴率</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={deviceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="device" />
                <YAxis domain={[0, 100]} />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
                <Bar dataKey="avgViewRate" name="平均視聴率" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">コスト効率</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={deviceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="device" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="costPerView" name="視聴あたりコスト" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">性別パフォーマンス</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">視聴率・コスト比較</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={genderData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="gender" />
                <YAxis yAxisId="left" orientation="left" domain={[0, 100]} />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="avgViewRate" name="平均視聴率" fill="#8884d8" />
                <Bar yAxisId="right" dataKey="costPerView" name="視聴あたりコスト" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">総視聴数</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={genderData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="gender" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalViews" name="総視聴数" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">日付別傾向</h2>
        <div className="bg-white p-4 rounded shadow">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dateData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" orientation="left" domain={[0, 100]} />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="avgViewRate" name="平均視聴率" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line yAxisId="right" type="monotone" dataKey="costPerView" name="視聴あたりコスト" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">視聴率トップパフォーマー</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topViewRateData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="combination" />
              <YAxis domain={[0, 100]} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
              <Bar dataKey="avgViewRate" name="平均視聴率" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">コスト効率トップパフォーマー</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topCostEfficiencyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="combination" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="costPerView" name="視聴あたりコスト" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">主要インサイト</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>デバイス別パフォーマンス:</strong> スマートフォンが最も高い視聴率（79.35%）を示していますが、総視聴数では少なめです。一方、テレビ画面とコンピュータが最も多くの視聴数を獲得しています。</li>
          <li><strong>コスト効率:</strong> タブレットが最もコスト効率が良く、視聴あたりのコストが最も低い（¥1.79）です。</li>
          <li><strong>性別傾向:</strong> 女性視聴者の方がわずかに高い視聴率（69.83%）を示していますが、男性視聴者の総視聴数の方が多いです。</li>
          <li><strong>最適な組み合わせ:</strong> スマートフォンでの女性向け広告が最も高い視聴率（79.90%）を示しており、タブレットでの男性・女性向け広告が最もコスト効率が良いです。</li>
          <li><strong>時間的傾向:</strong> 3月13日以降、視聴率が向上し、視聴あたりのコストが減少する傾向が見られます。</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoAdAnalysis;