import { Container, IconButton } from "@mui/material"
import { InferGetServerSidePropsType } from "next/types"
import Layout from "../../components/layout"
import { supabase } from "../../libs/supabase-client"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useRouter } from "next/router"
import StationDetailCard from "../../components/station-detail-card"
import Head from "next/head"

export default function StationDetail({
  station,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  const router = useRouter()

  const metaTitle = `${station.common_name} 슈퍼차저`

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Super charger Finder" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:image" content="/meta/og-image.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:site_name" content={metaTitle} />
        <meta property="og:description" content={metaTitle} />
        <meta property="og:url" content="https://suchafinder.xyz/" />
      </Head>
      <Layout.Header>
        <Container
          maxWidth="sm"
          sx={{
            mx: "auto",
            py: 1,
            display: "flex",
            gap: 1,
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => {
              router.back()
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        </Container>
      </Layout.Header>
      <Layout.Main>
        <StationDetailCard {...station} />
      </Layout.Main>
    </>
  )
}

export const getStaticPaths = async () => {
  const { data: stations } = await supabase.from("stations").select()
  const paths = stations?.map((station) => ({
    params: { id: String(station.id) },
  }))
  return { paths, fallback: false }
}

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id

  const { data, error } = await supabase
    .from("stations")
    .select()
    .eq("id", id)
    .single()

  if (!data || error) {
    throw Error("정삭적으로 데이터를 가져오지 못했습니다.")
  }

  return {
    props: {
      station: data,
    },
  }
}
