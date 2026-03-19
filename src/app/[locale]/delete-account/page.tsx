'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient;

function getSupabase() {
  if (!supabase) {
    supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  }
  return supabase;
}

type Step = 'login' | 'confirm' | 'success';

export default function DeleteAccountPage() {
  const t = useTranslations('DeleteAccount');
  const [step, setStep] = useState<Step>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data, error: authError } = await getSupabase().auth.signInWithPassword({
        email,
        password,
      });

      if (authError || !data.session) {
        setError(t('errorLogin'));
        return;
      }

      setAccessToken(data.session.access_token);
      setStep('confirm');
    } catch {
      setError(t('errorLogin'));
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/delete-user`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        setError(t('errorDelete'));
        return;
      }

      setStep('success');
    } catch {
      setError(t('errorDelete'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-md mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-4 text-center">
          {t('title')}
        </h1>
        <p className="text-[#1A2332]/60 mb-8 text-center">
          {t('description')}
        </p>

        {/* Login Step */}
        {step === 'login' && (
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#1A2332] mb-2"
              >
                {t('emailLabel')}
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('emailPlaceholder')}
                className="w-full px-4 py-3 rounded-xl border border-[#1A2332]/20 bg-white text-[#1A2332] placeholder:text-[#1A2332]/40 focus:outline-none focus:ring-2 focus:ring-[#FFB100] focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#1A2332] mb-2"
              >
                {t('passwordLabel')}
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t('passwordPlaceholder')}
                className="w-full px-4 py-3 rounded-xl border border-[#1A2332]/20 bg-white text-[#1A2332] placeholder:text-[#1A2332]/40 focus:outline-none focus:ring-2 focus:ring-[#FFB100] focus:border-transparent"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm bg-red-50 px-4 py-3 rounded-xl">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 bg-[#1A2332] text-white font-semibold rounded-xl hover:bg-[#1A2332]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? t('loginLoading') : t('loginButton')}
            </button>
          </form>
        )}

        {/* Confirm Step */}
        {step === 'confirm' && (
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl px-4 py-3">
              <p className="text-sm text-[#1A2332]/60">
                {t('loggedInAs')}{' '}
                <span className="font-medium text-[#1A2332]">{email}</span>
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-red-800 mb-3">
                {t('confirmTitle')}
              </h2>
              <p className="text-red-700 text-sm mb-4">
                {t('confirmMessage')}
              </p>
              <p className="text-red-600 text-xs font-medium">
                {t('warning')}
              </p>
            </div>

            {error && (
              <p className="text-red-600 text-sm bg-red-50 px-4 py-3 rounded-xl">
                {error}
              </p>
            )}

            <div className="flex flex-col gap-3">
              <button
                onClick={handleDelete}
                disabled={loading}
                className="w-full py-3 px-6 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? t('deleteLoading') : t('confirmButton')}
              </button>
              <button
                onClick={() => {
                  setStep('login');
                  setAccessToken('');
                  setError('');
                }}
                disabled={loading}
                className="w-full py-3 px-6 bg-gray-100 text-[#1A2332] font-semibold rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                {t('cancelButton')}
              </button>
            </div>
          </div>
        )}

        {/* Success Step */}
        {step === 'success' && (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-[#1A2332]">
              {t('successTitle')}
            </h2>
            <p className="text-[#1A2332]/70">
              {t('successMessage')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
