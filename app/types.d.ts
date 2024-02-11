export interface DataType {
    header: HeaderType,
    about: string,
    email: string,
    weather: WeatherType,
    contact: ContactType[],
    work: WorkType[],
}

export interface WeatherType {
  mapLoc: string
}

export interface HeaderType {
  title: string, 
  subtitle: string, 
  profile: string
}

export interface ContactType {
    title: string,
    icon: string,
    url: string
}

export interface WorkType {
  title: string,
  date: number,
  url: string,
  type: string
}