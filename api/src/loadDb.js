require('dotenv').config();
const axios = require ('axios');
const { Country, } = require ('./db')
const { API_ALL } = process.env;

async function LoadDb(req, res) {
  try {
    {
      const AllCountApi = await axios.get(API_ALL);
      const ModelCountries = AllCountApi.data.map((e) => {
        return {
          name: e.name.common,
          id: e.cca3,
          flags: e.flags[0],
          region: e.region,
          capital: e.capital ? e.capital[0] : 'Not found',
          subregion: e.subregion ? e.subregion[0] : 'Not found',
          area: e.area,
          population: e.population,
        };
      });
      ModelCountries.forEach(async (e) => {
        await Country.findOrCreate({
          where: {
            name: e.name,
            id: e.id,
            flags: e.flags,
            region: e.region,
            capital: e.capital,
            subregion: e.subregion,
            area: e.area,
            population: e.population,
          },
        });
      });
    }
    console.log('DB success')
  } catch (error) {
    return error;
  }
}
module.exports= {LoadDb}