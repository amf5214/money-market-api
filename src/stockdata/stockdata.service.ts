import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { TickerDto } from './ticker-dto';
import { FinancialsDto } from './financials-dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class StockdataService {
	constructor(
		private readonly httpService: HttpService,
		private config:ConfigService,
		) {}

	async tickerdata(dto:TickerDto): Promise<any> {
		const basePath = `https://api.polygon.io/v2/aggs/ticker/${dto.tickerName}/range/1/${dto.timeSpan}/${dto.startDate}/${dto.endDate}?adjusted=true&sort=asc&limit=${dto.limit}&apiKey=${this.config.get('POLYGON_API_TOKEN')}`;
		const observable = this.httpService.get(basePath);
		const response = await firstValueFrom(observable); 
		return response.data;
	}

	async marketstatus(): Promise<any> {
		const basePath = 'https://api.polygon.io/v1/marketstatus/now';
		const observable = this.httpService.get(`${basePath}?apiKey=${this.config.get('POLYGON_API_TOKEN')}`);
		const response = await firstValueFrom(observable);  
 		return {
			status: response.data.market,
			exchanges: response.data.exchanges,
			serverTime: response.data.serverTime,
		};	
	}

	async tickerfinancials(dto:FinancialsDto): Promise<any> {
		const basePath = 'https://api.polygon.io/vX/reference/financials';
		const observable = this.httpService.get(`${basePath}?ticker=${dto.tickerName}&timeframe=quarterly&apiKey=${this.config.get('POLYGON_API_TOKEN')}`);
		const response = await firstValueFrom(observable); 
		return response.data;
	};

	async winnersLosers() {
		const basePath = "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS";
		const observable = this.httpService.get(`${basePath}&apikey=${this.config.get('ALPHA_VANTAGE_KEY')}`);
		const response = await firstValueFrom(observable);
		return response.data;
	}

	async winnersLosersDemo() {
		return {
			"metadata": "Top gainers, losers, and most actively traded US tickers",
			"last_updated": "2024-03-08 16:15:59 US/Eastern",
			"top_gainers": [
				{
					"ticker": "JWSM+",
					"price": "0.2011",
					"change_amount": "0.1311",
					"change_percentage": "187.2857%",
					"volume": "1008216"
				},
				{
					"ticker": "BWAQW",
					"price": "0.13",
					"change_amount": "0.0747",
					"change_percentage": "135.0814%",
					"volume": "63699"
				},
				{
					"ticker": "PBMWW",
					"price": "0.1102",
					"change_amount": "0.0626",
					"change_percentage": "131.5126%",
					"volume": "712515"
				},
				{
					"ticker": "PORT+",
					"price": "0.0462",
					"change_amount": "0.0261",
					"change_percentage": "129.8507%",
					"volume": "15018"
				},
				{
					"ticker": "AIMDW",
					"price": "0.0889",
					"change_amount": "0.0486",
					"change_percentage": "120.5955%",
					"volume": "21323"
				},
				{
					"ticker": "PPHPW",
					"price": "0.038",
					"change_amount": "0.0205",
					"change_percentage": "117.1429%",
					"volume": "51235"
				},
				{
					"ticker": "CELG^",
					"price": "0.0599",
					"change_amount": "0.0298",
					"change_percentage": "99.0033%",
					"volume": "9701"
				},
				{
					"ticker": "NXLIW",
					"price": "0.0301",
					"change_amount": "0.0146",
					"change_percentage": "94.1935%",
					"volume": "79007"
				},
				{
					"ticker": "NCPLW",
					"price": "0.035",
					"change_amount": "0.0164",
					"change_percentage": "88.172%",
					"volume": "13300"
				},
				{
					"ticker": "SGD",
					"price": "1.24",
					"change_amount": "0.581",
					"change_percentage": "88.1639%",
					"volume": "65133179"
				},
				{
					"ticker": "AIMD",
					"price": "2.05",
					"change_amount": "0.93",
					"change_percentage": "83.0357%",
					"volume": "54703438"
				},
				{
					"ticker": "BZFDW",
					"price": "0.06",
					"change_amount": "0.0263",
					"change_percentage": "78.0415%",
					"volume": "113001"
				},
				{
					"ticker": "ASCAW",
					"price": "0.0526",
					"change_amount": "0.0226",
					"change_percentage": "75.3333%",
					"volume": "1127237"
				},
				{
					"ticker": "MIRA",
					"price": "1.57",
					"change_amount": "0.654",
					"change_percentage": "71.3974%",
					"volume": "25880769"
				},
				{
					"ticker": "SELX",
					"price": "1.69",
					"change_amount": "0.69",
					"change_percentage": "69.0%",
					"volume": "8949751"
				},
				{
					"ticker": "DAVEW",
					"price": "0.0699",
					"change_amount": "0.0279",
					"change_percentage": "66.4286%",
					"volume": "44125"
				},
				{
					"ticker": "PBM",
					"price": "2.11",
					"change_amount": "0.84",
					"change_percentage": "66.1417%",
					"volume": "149444836"
				},
				{
					"ticker": "XBP",
					"price": "3.62",
					"change_amount": "1.38",
					"change_percentage": "61.6071%",
					"volume": "165539"
				},
				{
					"ticker": "EDBLW",
					"price": "0.018",
					"change_amount": "0.0065",
					"change_percentage": "56.5217%",
					"volume": "5000"
				},
				{
					"ticker": "BUJAR",
					"price": "0.2469",
					"change_amount": "0.0869",
					"change_percentage": "54.3125%",
					"volume": "4120"
				}
			],
			"top_losers": [
				{
					"ticker": "AMLX",
					"price": "3.36",
					"change_amount": "-15.61",
					"change_percentage": "-82.2878%",
					"volume": "60850206"
				},
				{
					"ticker": "THWWW",
					"price": "0.0052",
					"change_amount": "-0.0098",
					"change_percentage": "-65.3333%",
					"volume": "31003"
				},
				{
					"ticker": "EACPW",
					"price": "0.0007",
					"change_amount": "-0.0012",
					"change_percentage": "-63.1579%",
					"volume": "72889"
				},
				{
					"ticker": "BCDAW",
					"price": "0.0152",
					"change_amount": "-0.0197",
					"change_percentage": "-56.447%",
					"volume": "251"
				},
				{
					"ticker": "FIACW",
					"price": "0.0212",
					"change_amount": "-0.0218",
					"change_percentage": "-50.6977%",
					"volume": "197549"
				},
				{
					"ticker": "SCPX",
					"price": "0.1717",
					"change_amount": "-0.1683",
					"change_percentage": "-49.5%",
					"volume": "10235755"
				},
				{
					"ticker": "SXTPW",
					"price": "0.06",
					"change_amount": "-0.05",
					"change_percentage": "-45.4545%",
					"volume": "99"
				},
				{
					"ticker": "OPFI+",
					"price": "0.12",
					"change_amount": "-0.08",
					"change_percentage": "-40.0%",
					"volume": "48596"
				},
				{
					"ticker": "CMCAW",
					"price": "0.021",
					"change_amount": "-0.014",
					"change_percentage": "-40.0%",
					"volume": "160875"
				},
				{
					"ticker": "AGRIW",
					"price": "0.0062",
					"change_amount": "-0.0038",
					"change_percentage": "-38.0%",
					"volume": "432"
				},
				{
					"ticker": "CTOS+",
					"price": "0.0068",
					"change_amount": "-0.0041",
					"change_percentage": "-37.6147%",
					"volume": "13010"
				},
				{
					"ticker": "FTIIW",
					"price": "0.0251",
					"change_amount": "-0.0149",
					"change_percentage": "-37.25%",
					"volume": "10200"
				},
				{
					"ticker": "BITE+",
					"price": "0.0252",
					"change_amount": "-0.0148",
					"change_percentage": "-37.0%",
					"volume": "49462"
				},
				{
					"ticker": "AAGR",
					"price": "0.362",
					"change_amount": "-0.188",
					"change_percentage": "-34.1818%",
					"volume": "1788327"
				},
				{
					"ticker": "IVCBW",
					"price": "0.16",
					"change_amount": "-0.08",
					"change_percentage": "-33.3333%",
					"volume": "367946"
				},
				{
					"ticker": "SNAXW",
					"price": "0.0051",
					"change_amount": "-0.0025",
					"change_percentage": "-32.8947%",
					"volume": "77926"
				},
				{
					"ticker": "SVMHW",
					"price": "0.03",
					"change_amount": "-0.0147",
					"change_percentage": "-32.8859%",
					"volume": "23525"
				},
				{
					"ticker": "SHCRW",
					"price": "0.0195",
					"change_amount": "-0.0095",
					"change_percentage": "-32.7586%",
					"volume": "42021"
				},
				{
					"ticker": "SWVLW",
					"price": "0.0135",
					"change_amount": "-0.0063",
					"change_percentage": "-31.8182%",
					"volume": "58009"
				},
				{
					"ticker": "BBAI",
					"price": "2.575",
					"change_amount": "-1.185",
					"change_percentage": "-31.516%",
					"volume": "39412916"
				}
			],
			"most_actively_traded": [
				{
					"ticker": "SOXS",
					"price": "3.185",
					"change_amount": "0.345",
					"change_percentage": "12.1479%",
					"volume": "367801286"
				},
				{
					"ticker": "SQQQ",
					"price": "10.96",
					"change_amount": "0.45",
					"change_percentage": "4.2816%",
					"volume": "223443971"
				},
				{
					"ticker": "PBM",
					"price": "2.11",
					"change_amount": "0.84",
					"change_percentage": "66.1417%",
					"volume": "149444836"
				},
				{
					"ticker": "TQQQ",
					"price": "60.06",
					"change_amount": "-2.75",
					"change_percentage": "-4.3783%",
					"volume": "147294383"
				},
				{
					"ticker": "SOXL",
					"price": "48.84",
					"change_amount": "-6.48",
					"change_percentage": "-11.7137%",
					"volume": "127124348"
				},
				{
					"ticker": "AMD",
					"price": "207.39",
					"change_amount": "-3.99",
					"change_percentage": "-1.8876%",
					"volume": "119782185"
				},
				{
					"ticker": "NVDA",
					"price": "875.28",
					"change_amount": "-51.41",
					"change_percentage": "-5.5477%",
					"volume": "111675571"
				},
				{
					"ticker": "RIVN",
					"price": "12.78",
					"change_amount": "0.27",
					"change_percentage": "2.1583%",
					"volume": "106726920"
				},
				{
					"ticker": "PBR",
					"price": "14.78",
					"change_amount": "-1.92",
					"change_percentage": "-11.497%",
					"volume": "102994658"
				},
				{
					"ticker": "MARA",
					"price": "23.48",
					"change_amount": "1.68",
					"change_percentage": "7.7064%",
					"volume": "93290603"
				},
				{
					"ticker": "IBIT",
					"price": "39.55",
					"change_amount": "0.92",
					"change_percentage": "2.3816%",
					"volume": "89471195"
				},
				{
					"ticker": "SPY",
					"price": "511.77",
					"change_amount": "-3.04",
					"change_percentage": "-0.5905%",
					"volume": "85397700"
				},
				{
					"ticker": "TSLA",
					"price": "175.34",
					"change_amount": "-3.31",
					"change_percentage": "-1.8528%",
					"volume": "84613275"
				},
				{
					"ticker": "PLTR",
					"price": "26.035",
					"change_amount": "-0.425",
					"change_percentage": "-1.6062%",
					"volume": "83458955"
				},
				{
					"ticker": "FSR",
					"price": "0.3773",
					"change_amount": "-0.0223",
					"change_percentage": "-5.5806%",
					"volume": "82148413"
				},
				{
					"ticker": "NKLA",
					"price": "0.67",
					"change_amount": "-0.0165",
					"change_percentage": "-2.4035%",
					"volume": "81315741"
				},
				{
					"ticker": "SOFI",
					"price": "7.71",
					"change_amount": "0.24",
					"change_percentage": "3.2129%",
					"volume": "76097784"
				},
				{
					"ticker": "AAPL",
					"price": "170.73",
					"change_amount": "1.73",
					"change_percentage": "1.0237%",
					"volume": "75752567"
				},
				{
					"ticker": "SOUN",
					"price": "5.86",
					"change_amount": "0.23",
					"change_percentage": "4.0853%",
					"volume": "74040043"
				},
				{
					"ticker": "QQQ",
					"price": "439.02",
					"change_amount": "-6.43",
					"change_percentage": "-1.4435%",
					"volume": "71541018"
				}
			]
		}
	}
}
