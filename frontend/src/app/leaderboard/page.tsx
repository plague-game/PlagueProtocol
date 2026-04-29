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

      {/* HEADER - MASSIVE AND DRAMATIC */}
      <section className="border-b border-accent-purple/30 px-4 py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-float-up" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/15 rounded-full blur-3xl animate-float-up" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-6 text-center">
              <p className="text-accent-coral font-mono uppercase tracking-[0.2em] font-bold text-sm">Rankings & Achievements</p>
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-black leading-tight text-foreground">
                Global <span className="bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">Leaderboard</span>
              </h1>
              <p className="text-xl sm:text-2xl text-foreground-secondary max-w-2xl mx-auto">
                Compete against the best players in the world. Prove your strategy, earn your rank.
              </p>
            </div>

            {/* Season Tabs - Better Spaced */}
            <div className="flex gap-3 justify-center flex-wrap">
              {[
                { id: 'current', label: 'Current Season' },
                { id: 'season2', label: 'Season 2' },
                { id: 'all', label: 'All Time' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSeason(tab.id as any)}
                  className={`px-8 py-3 rounded-xl font-mono text-sm uppercase tracking-wider transition-all font-bold ${
                    season === tab.id
                      ? 'bg-accent-purple text-white shadow-glow-purple'
                      : 'border-2 border-accent-purple/30 text-text-secondary hover:border-accent-purple/60'
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
      <section className="px-4 py-24 w-full flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16">
            {/* Leaderboard Table */}
            <div className="space-y-6">
              {/* Header Row */}
              <div className="card-premium p-6 grid grid-cols-[60px_1fr_120px_120px_120px] gap-6 text-xs font-mono uppercase tracking-wider text-foreground-muted font-bold rounded-xl border-2 border-accent-purple/40">
                <div>Rank</div>
                <div>Player</div>
                <div>Wins</div>
                <div>Rate</div>
                <div>Earnings</div>
              </div>

              {/* Player Rows */}
              <div className="space-y-3">
                {topPlayers.map((player) => (
                  <div
                    key={player.rank}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-purple to-accent-pink rounded-xl opacity-0 group-hover:opacity-100 transition-all blur" />
                    <button
                      className="card-premium p-6 grid grid-cols-[60px_1fr_120px_120px_120px] gap-6 items-center hover:scale-102 transition-transform w-full text-left group relative rounded-xl border-2 border-accent-purple/30 group-hover:border-accent-purple/80"
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
                          <span className="text-foreground-muted">#{player.rank}</span>
                        )}
                      </span>
                    </div>

                    {/* Player Name */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center text-sm font-bold">
                        {player.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-foreground group-hover:text-accent-cyan transition-colors">
                          {player.name}
                        </p>
                        <p className="text-xs text-foreground-muted">{player.badge}</p>
                      </div>
                    </div>

                    {/* Wins */}
                    <div className="text-right">
                      <p className="font-bold text-foreground">{player.wins}</p>
                      <p className="text-xs text-foreground-muted">wins</p>
                    </div>

                    {/* Win Rate */}
                    <div className="text-right">
                      <p className="font-bold text-accent-lime">{player.winRate}%</p>
                      <p className="text-xs text-foreground-muted">rate</p>
                    </div>

                    {/* Earnings */}
                    <div className="text-right">
                      <p className="font-bold text-accent-pink">{player.earnings}</p>
                      <p className="text-xs text-foreground-muted">XLM</p>
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
            <div className="space-y-8">
              {/* Current Player Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-cyan to-accent-lime rounded-2xl opacity-0 group-hover:opacity-100 transition-all blur" />
                <div className="card-premium p-10 space-y-6 relative rounded-2xl border-2 border-accent-cyan/40">
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Your Stats
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground-muted font-bold">Rank</span>
                      <span className="font-display text-2xl font-bold text-accent-cyan">#247</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground-muted font-bold">Wins</span>
                      <span className="font-display text-2xl font-bold text-accent-lime">12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground-muted font-bold">Win Rate</span>
                      <span className="font-display text-2xl font-bold text-accent-purple">55%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground-muted font-bold">Earnings</span>
                      <span className="font-display text-2xl font-bold text-accent-pink">85.4 XLM</span>
                    </div>
                  </div>
                  <button className="btn-premium w-full rounded-xl py-4 font-bold mt-4">
                    View Profile
                  </button>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Achievements
                </h3>
                <div className="space-y-3">
                  {achievements.map((achievement, idx) => (
                    <div key={idx} className="card-premium p-5 flex items-center gap-4 rounded-xl border-2 border-accent-purple/20 hover:border-accent-purple/50 transition-all">
                      <span className="text-4xl">{achievement.icon}</span>
                      <div>
                        <p className="text-sm font-bold text-foreground">{achievement.name}</p>
                        <p className="text-xs text-foreground-muted">{achievement.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Season Info */}
              <div className="card-premium p-8 space-y-6 rounded-2xl border-2 border-accent-lime/40">
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Season Progress
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-3">
                      <span className="text-xs text-foreground-muted font-bold uppercase tracking-wider">Level</span>
                      <span className="font-bold text-lg text-accent-lime">12 / 20</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-accent-purple/20">
                      <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-accent-purple to-accent-pink" />
                    </div>
                  </div>
                  <p className="text-xs text-foreground-muted text-center font-mono">
                    8 more wins to level up
                  </p>
                </div>
              </div>
            </div>


      {/* Footer CTA - LARGE AND DRAMATIC */}
      <section className="px-4 py-40 border-t border-accent-purple/30 bg-gradient-to-b from-accent-purple/8 via-accent-cyan/5 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-purple/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl font-black leading-tight text-foreground">
              Claim Your <span className="bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">Crown</span>
            </h2>
            <p className="text-2xl text-foreground-secondary max-w-2xl mx-auto">
              Your journey to the top starts now. Play strategically, outwit your opponents, and earn your legendary status.
            </p>
          </div>
          <Link href="/lobby" className="btn-premium rounded-xl px-12 py-6 text-lg font-bold shadow-premium hover:shadow-glow-purple transition-all inline-block transform hover:-translate-y-1">
            Start Playing
          </Link>
        </div>
      </section>
    </main>
  )
}
