import HomeServices from "@/components/Home/HomeServices";
import ImageFixed from "@/components/Home/ImageFixed";
import WhoAreWe from "@/components/Home/WhoAreWe";
import SwiperElement from "@/components/ui/SwiperElement";

export default function Home() {
  return (
    <>
      <SwiperElement />
      <WhoAreWe />
      <ImageFixed />
      <HomeServices />
    </>
  );
}
