import React from 'react';
import Breadcumb from '@components/Breadcumb';
import useLocale from '@hooks/use-locale';
import { useLocaleContext } from '@hooks/use-locale-context';
import AboutQA from '@components/AboutQA';

const About = () => {
    const { locale } = useLocaleContext();
    const t = useLocale(locale).about;

    const h1Class = `text-4xl`;
    const pClass = `dark:text-gray-600 mt-2 text-md`;
    const aClass = `underline text-primary-600 hover:text-primary-800 visited:text-purple-600`;
    return (
        <>
            <div className="pt-10">
                <Breadcumb list={[{ href: null, name: 'About' }]} />
            </div>

            <div className="py-10 dark:text-gray-500 text-gray-900 dark font-bold px-2 md:mx-10">
                <h1 className={h1Class}>{t.head}</h1>
                <div className="flex flex-col items-center justify-center space-y-4 w-full my-4">
                    <AboutQA question={t.q1} answer={[t.a1]} />
                    <AboutQA
                        question={t.q2}
                        answer={[
                            t.a21,
                            <p className={pClass}>
                                {t.a22}
                                <a className={aClass} href="https://life-api.coronasafe.network/">
                                    life-api.coronasafe.network
                                </a>{' '}
                                {t.a23}
                            </p>
                        ]}
                    />
                    <AboutQA
                        question={t.q3}
                        answer={[
                            <p className={pClass}>
                                {t.a31}
                                <a className={aClass} href="https://life-api.coronasafe.network/">
                                    {' '}
                                    API
                                </a>
                            </p>,
                            <p className={pClass}>
                                {t.a32}
                                <a className={aClass} href="https://github.com/coronasafe/life/">
                                    Github
                                </a>{' '}
                                {t.a33}
                            </p>
                        ]}
                    />
                    <AboutQA question={t.q4} answer={[t.a4]} />
                    <AboutQA question={t.q5} answer={[t.a5]} />
                    <AboutQA question={t.q6} answer={[t.a6]} />
                    <AboutQA
                        question={t.q7}
                        answer={[
                            <p className={pClass}>
                                <a className={aClass} href="https://youtu.be/PMEhgHdmRkQ">
                                    Our tutorial on how to help us on airtable
                                </a>
                                {t.a7}
                            </p>,
                            <p className="mt-2">
                                <a className={aClass} href="https://chat.suraksha.network/">
                                    Join our Slack
                                </a>
                            </p>
                        ]}
                    />
                    <AboutQA
                        question={t.q8}
                        answer={[
                            <p className={pClass}>
                                <a
                                    className={aClass}
                                    href="https://www.instagram.com/p/CN-6uNIBa7q/?igshid=1x1hs3m8omw9f">
                                    {t.a8}
                                </a>
                            </p>
                        ]}
                    />
                    <AboutQA
                        question={t.q9}
                        answer={[
                            <p className={pClass}>
                                {t.a9}
                                <a className={aClass} href="mailto:simran@covidfyi.in">
                                    {' '}
                                    simran@covidfyi.in
                                </a>{' '}
                                {t.a91}
                            </p>
                        ]}
                    />
                    <AboutQA
                        question={t.q10}
                        answer={[
                            <p className={pClass}>{t.a10}</p>,
                            <a className={aClass} href="/partners">
                                Current Partners
                            </a>
                        ]}
                    />
                    <AboutQA
                        question={t.q11}
                        answer={[
                            <p className={pClass}>
                                {t.a112}
                                {
                                    <a
                                        className={aClass}
                                        href="https://liferesources.in/"
                                        target="_blank">
                                        https://liferesources.in/
                                    </a>
                                }
                                {t.a113}
                            </p>,
                            <p className={pClass}>{t.a114}</p>
                        ]}
                    />
                </div>
            </div>
        </>
    );
};

export default About;
