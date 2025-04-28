import { useQuery } from "@tanstack/react-query";
import PageLayout from "./PageLayout";
import { useParams } from "react-router-dom";
import axios from "axios";
import Twit from "./Twit";
import NewTwit from "./NewTwit";

export default function TwitDetail() {
  let { twitId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["twitDetail", twitId],
    queryFn: () => axios.get(`http://localhost:3005/twits/${twitId}`),
  });

  const item = data && data.data.data.length > 0 && data.data.data[0];
  
  return (
    <PageLayout>
      <div className="bg-white rounded-xl shadow-xl">
        {isLoading ? (
          <div className="p-6 text-center">Yükleniyor</div>
        ) : data && data.data.data.length === 0 ? (
          <div className="p-6 text-center">Böyle bir twit yok.</div>
        ) : (
          <div>
            <Twit item={item} twitType="main" />
            {item.reply_twits &&
              item.reply_twits.map((reply) => (
                <Twit key={reply.id} item={reply} twitType="reply" />
              ))}
            <NewTwit replyTo={twitId} />
          </div>
        )}
      </div>
    </PageLayout>
  );
}