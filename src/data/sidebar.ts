import { Compass, Download, FolderClosed, Heart, Home, ListMusic } from "lucide-react";

export const routes = [
  { 
    id:1,
    section:"Features",
    route:[
        {   
            id:1,
            icon:Home,
            name:"Home"
        },
        {
            id:2,
            icon:Compass,
            name:"Discover"
        },
        {
            id:3,
            icon:ListMusic,
            name:"Collections"
        },
    ]
  },
  {
    id:2,
    section:"Library",
    route:[
        {
            id:1,
            icon:Download,
            name:"Download"
        },
        {
            id:2,
            icon:Heart,
            name:"Favourites"
        },
        {
            id:3,
            icon:FolderClosed,
            name:"Local Files"
        },
    ]
  },
]