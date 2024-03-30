import { useRouter } from 'next/router';

export default {
  logo: <span>Sentinel Documentation</span>,
  project: {
    link: "https://github.com/vaibhavraj-exe/sentinel",
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Sentinel" />
      <meta property="og:description" content="Sentinel Documentation" />
    </>
  ),
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Sentinel'
      }
    }
  }

};
