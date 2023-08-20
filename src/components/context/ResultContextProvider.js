import React,{ createContext ,useContext ,useState} from 'react';
const ResultContext=createContext();
const baseUrl='https://google-search72.p.rapidapi.com/search';


export const ResultContextProvider = ({children}) => {
    const [results, setResults]=useState([]);
    const [loading, setLoading]=useState(false);
    const [searchTerm, setSearchTerm]=useState('');
    const getResults=async (url)=>{
        setLoading(true);
  
    const res = await fetch(`${baseUrl}?q=${url}`,
    {
        
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '581f48dfc2mshf7bef5a86008465p1bd887jsn3de2467f7140',
              'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
            }
        
    },
    )
    const data= await res.json();
    console.log(data)
    setResults(data);
    setLoading(false);
};
  return (
    <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm,loading}}>
      {children}
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext);