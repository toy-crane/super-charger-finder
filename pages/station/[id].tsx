import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next/types"
import { supabase } from "../../libs/supabase-client"

export default function StationDetail({
  station,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <div>{station.city}</div>
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
