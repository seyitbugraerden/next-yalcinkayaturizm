interface sectionTitleTypes {
  title?: string | "Test";
  mainTitle?: string;
  white?: boolean;
  description?: string;
}

interface homeServiceTypes {
  text: string;
  imgEl: string;
  linkEl: string;
}

interface offerCardTypes {
  features: any;
}

interface contactCardTypes {
  features: any;
}
interface bannerTypes {
  title: string;
  imgEl: string;
}

interface paramsTypes {
  params: paramsChildTypes;
}
interface paramsChildTypes {
  slug: string;
}

interface Inputs {
  name: string;
  surname: string;
  email: string;
  subject: string;
}
