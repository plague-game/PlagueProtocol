'use client'

import { useState } from 'react'
import { SiteNav } from '@/components/ui/site-nav'
import Link from 'next/link'

export default function LeaderboardPage() {
  const [season, setSeason] = useState<'current' | 'season2' | 'all'>('current')

  const topPlayers = [
    { rank: 1, name: 'ShadowMaster', wins: 47, winRate: 78, earnings: 1240, badge: '👑' },
    { rank: 2, name: 'NoirWhisperer', wins: 43, winRate: 72, earnings: 980, badge: '⭐' },
    { rank: 3, name: 'ProofKeeper', wins: 41, winRate: 68, earnings: 850, badge: '🔐' },
    { rank: 4, name: 'InfectionHunter', wins: 38, winRate: 63, earnings: 720, badge: '🎯' },
    { rank: 5, name: 'CryptoNinja', wins: 36, winRate: 60, earnings: 680, badge: '🥋' },
    { rank: 6, name: 'DeductionKing', wins: 34, winRate: 57, earnings: 620, badge: '👑' },
    { rank: 7, name: 'VoteWhisperer', wins: 31, winRate: 52, earnings: 540, badge: '💬' },
    { rank: 8, name: 'PatientZeroFinder', wins: 29, winRate: 48, earnings: 480, badge: '🔍' },
  ]

  const achievements = [
    { icon: '🏆', name: 'Season Champion', desc: 'Win a season' },
    { icon: '⭐', name: 'Rising Star', desc: 'Win 5 consecutive games' },
    { icon: '🔐', name: 'Proof Master', desc: 'Submit 100 proofs' },
    { icon: '👑', name: 'Royalty', desc: 'Reach rank 1' },
    { icon: '💰', name: 'Million Club', desc: 'Earn 1000 XLM' },
    { icon: '🎭', name: 'Deception Expert', desc: 'Win 10 games as infected' },
  ]

  return (
    <main className="min-h-screen">
      <SiteNav currentPath="/leaderboard" />

      {/* Header */}
      <section className="border-b border-accent-purple/30 px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-display text-5xl sm:text-6xl font-bold text-text-primary">
                Leaderboard
              </h1>
              <p className="text-lg text-text-secondary">
                Compete globally and claim your place among the elite
              </p>
            </div>

            {/* Season Tabs */}
            <div className="flex gap-2">
              {[
                { id: 'current', label: 'Current Season' },
                { id: 'season2', label: 'Season 2' },
                { id: 'all', label: 'All Time' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSeason(tab.id as any)}
                  className={`px-6 py-3 rounded-lg font-mono text-sm uppercase tracking-wider transition-all ${
                    season === tab.id
                      ? 'bg-accent-purple text-white shadow-glow-purple'
                      : 'border border-accent-purple/30 text-text-secondary hover:border-accent-purple/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_350px] gap-12">
            {/* Leaderboard Table */}
            <div className="space-y-4">
              {/* Header Row */}
              <div className="card-premium p-4 grid grid-cols-[50px_1fr_100px_100px_100px] gap-4 text-xs font-mono uppercase tracking-wider text-text-muted">
                <div>Rank</div>
                <div>Player</div>
                <div>Wins</div>
                <div>Win Rate</div>
                <div>Earnings</div>
              </div>

              {/* Player Rows */}
              <div className="space-y-2">
                {topPlayers.map((player) => (
                  <button
                    key={player.rank}
                    className="card-premium p-4 grid grid-cols-[50px_1fr_100px_100px_100px] gap-4 items-center hover:scale-102 transition-transform w-full text-left group"
                  >
                    {/* Rank */}
                    <div className="flex items-center justify-center">
                      <span className="font-display text-xl font-bold">
                        {player.rank === 1 && (
                          <span className="text-accent-coral">🥇</span>
                        )}
                        {player.rank === 2 && (
                          <span className="text-accent-lime">🥈</span>
                        )}
                        {player.rank === 3 && (
                          <span className="text-accent-pink">🥉</span>
                        )}
                        {player.rank > 3 && (
                          <span className="text-text-muted">#{player.rank}</span>
                        )}
                      </span>
                    </div>

                    {/* Player Name */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center text-sm font-bold">
                        {player.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-text-primary group-hover:text-accent-cyan transition-colors">
                          {player.name}
                        </p>
                        <p className="text-xs text-text-muted">{player.badge}</p>
                      </div>
                    </div>

                    {/* Wins */}
                    <div className="text-right">
                      <p className="font-bold text-text-primary">{player.wins}</p>
                      <p className="text-xs text-text-muted">wins</p>
                    </div>

                    {/* Win Rate */}
                    <div className="text-right">
                      <p className="font-bold text-accent-lime">{player.winRate}%</p>
                      <p className="text-xs text-text-muted">rate</p>
                    </div>

                    {/* Earnings */}
                    <div className="text-right">
                      <p className="font-bold text-accent-pink">{player.earnings}</p>
                      <p className="text-xs text-text-muted">XLM</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2 pt-8">
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`w-10 h-10 rounded-lg font-mono font-bold transition-all ${
                      page === 1
                        ? 'bg-accent-purple text-white shadow-glow-purple'
                        : 'border border-accent-purple/30 text-text-secondary hover:border-accent-purple/60'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Current Player Card */}
              <div className="card-premium p-6 space-y-4">
                <h3 className="font-display text-lg font-bold text-text-primary">
                  Your Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-text-muted">Rank</span>
                    <span className="font-bold text-accent-cyan">#247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-text-muted">Wins</span>
                    <span className="font-bold text-accent-lime">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-text-muted">Win Rate</span>
                    <span className="font-bold text-accent-purple">55%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-text-muted">Earnings</span>
                    <span className="font-bold text-accent-pink">85.4 XLM</span>
                  </div>
                </div>
                <button className="btn-premium w-full rounded-lg mt-4">
                  View Profile
                </button>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                <h3 className="font-display text-lg font-bold text-text-primary">
                  Achievements
                </h3>
                <div className="space-y-2">
                  {achievements.map((achievement, idx) => (
                    <div key={idx} className="card-premium p-3 flex items-center gap-3">
                      <span className="text-2xl">{achievement.icon}</span>
                      <div>
                        <p className="text-sm font-bold text-text-primary">{achievement.name}</p>
                        <p className="text-xs text-text-muted">{achievement.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Season Info */}
              <div className="card-premium p-6 space-y-4">
                <h3 className="font-display text-lg font-bold text-text-primary">
                  Season Progress
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-text-muted">Level</span>
                      <span className="font-bold">12 / 20</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-accent-purple/20">
                      <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-accent-purple to-accent-pink" />
                    </div>
                  </div>
                  <p className="text-xs text-text-muted text-center">
                    8 more wins to level 13
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-4 py-16 border-t border-accent-purple/30 bg-gradient-to-r from-accent-purple/5 via-accent-cyan/5 to-accent-pink/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-display text-3xl font-bold text-text-primary">
            Climb the Rankings
          </h2>
          <p className="text-lg text-text-secondary">
            Your journey to the top starts now. Play strategically and earn your place in history.
          </p>
          <Link href="/lobby" className="btn-premium rounded-lg inline-block">
            Play Now
          </Link>
        </div>
      </section>
    </main>
  )
}
