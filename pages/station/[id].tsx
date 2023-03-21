import { Container, IconButton } from "@mui/material"
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next/types"
import Layout from "../../components/layout"
import { supabase } from "../../libs/supabase-client"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useRouter } from "next/router"
import StationDetailCard from "../../components/station-detail-card"

export default function StationDetail({
  station,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()

  return (
    <>
      <Layout.Header>
        <Container
          maxWidth="sm"
          sx={{
            mx: "auto",
            py: 2,
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

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.query

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
