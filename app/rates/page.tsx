"use client";

import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronDown, Globe, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import Image from "next/image";

// Define types for currency data
interface CurrencyData {
  code: string;
  rate: number;
}

export default function RatesPage() {
  const [mounted, setMounted] = useState(false);
  const [currency, setCurrency] = useState("KSH");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [countryCode, setCountryCode] = useState("KE");
  const [loading, setLoading] = useState(true);
  const [availableCurrencies, setAvailableCurrencies] = useState<
    CurrencyData[]
  >([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Detect user's country and set appropriate currency
  useEffect(() => {
    setMounted(true);

    // Get user's location by IP and fetch exchange rates
    const setupCurrencies = async () => {
      try {
        setLoading(true);

        // 1. Get user's location
        const locationResponse = await fetch("https://ipapi.co/json/");
        const locationData = await locationResponse.json();

        // Set country code
        setCountryCode(locationData.country_code || "KE");

        // 2. Fetch supported currencies from Exchange Rate API
        const currencyResponse = await fetch(
          "https://open.er-api.com/v6/latest/KES"
        );
        const currencyData = await currencyResponse.json();

        if (currencyData.rates) {
          // Create a map of all available currencies
          const currencies: CurrencyData[] = Object.keys(
            currencyData.rates
          ).map((code) => ({
            code,
            rate: currencyData.rates[code],
          }));

          setAvailableCurrencies(currencies);

          // Map country to currency code
          const countryCurrencyMap = {
            AF: "AFN", // Afghanistan
            AL: "ALL", // Albania
            DZ: "DZD", // Algeria
            AS: "USD", // American Samoa
            AD: "EUR", // Andorra
            AO: "AOA", // Angola
            AI: "XCD", // Anguilla
            AQ: "USD", // Antarctica
            AG: "XCD", // Antigua and Barbuda
            AR: "ARS", // Argentina
            AM: "AMD", // Armenia
            AW: "AWG", // Aruba
            AU: "AUD", // Australia
            AT: "EUR", // Austria
            AZ: "AZN", // Azerbaijan
            BS: "BSD", // Bahamas
            BH: "BHD", // Bahrain
            BD: "BDT", // Bangladesh
            BB: "BBD", // Barbados
            BY: "BYN", // Belarus
            BE: "EUR", // Belgium
            BZ: "BZD", // Belize
            BJ: "XOF", // Benin
            BM: "BMD", // Bermuda
            BT: "BTN", // Bhutan
            BO: "BOB", // Bolivia
            BQ: "USD", // Bonaire, Sint Eustatius and Saba
            BA: "BAM", // Bosnia and Herzegovina
            BW: "BWP", // Botswana
            BV: "NOK", // Bouvet Island
            BR: "BRL", // Brazil
            IO: "USD", // British Indian Ocean Territory
            BN: "BND", // Brunei Darussalam
            BG: "BGN", // Bulgaria
            BF: "XOF", // Burkina Faso
            BI: "BIF", // Burundi
            CV: "CVE", // Cabo Verde
            KH: "KHR", // Cambodia
            CM: "XAF", // Cameroon
            CA: "CAD", // Canada
            KY: "KYD", // Cayman Islands
            CF: "XAF", // Central African Republic
            TD: "XAF", // Chad
            CL: "CLP", // Chile
            CN: "CNY", // China
            CX: "AUD", // Christmas Island
            CC: "AUD", // Cocos (Keeling) Islands
            CO: "COP", // Colombia
            KM: "KMF", // Comoros
            CG: "XAF", // Congo
            CD: "CDF", // Congo (Democratic Republic)
            CK: "NZD", // Cook Islands
            CR: "CRC", // Costa Rica
            CI: "XOF", // Côte d'Ivoire
            HR: "HRK", // Croatia
            CU: "CUP", // Cuba
            CW: "ANG", // Curaçao
            CY: "EUR", // Cyprus
            CZ: "CZK", // Czech Republic
            DK: "DKK", // Denmark
            DJ: "DJF", // Djibouti
            DM: "XCD", // Dominica
            DO: "DOP", // Dominican Republic
            EC: "USD", // Ecuador
            EG: "EGP", // Egypt
            SV: "USD", // El Salvador
            GQ: "XAF", // Equatorial Guinea
            ER: "ERN", // Eritrea
            EE: "EUR", // Estonia
            SZ: "SZL", // Eswatini
            ET: "ETB", // Ethiopia
            FK: "FKP", // Falkland Islands
            FO: "DKK", // Faroe Islands
            FJ: "FJD", // Fiji
            FI: "EUR", // Finland
            FR: "EUR", // France
            GF: "EUR", // French Guiana
            PF: "XPF", // French Polynesia
            TF: "EUR", // French Southern Territories
            GA: "XAF", // Gabon
            GM: "GMD", // Gambia
            GE: "GEL", // Georgia
            DE: "EUR", // Germany
            GH: "GHS", // Ghana
            GI: "GIP", // Gibraltar
            GR: "EUR", // Greece
            GL: "DKK", // Greenland
            GD: "XCD", // Grenada
            GP: "EUR", // Guadeloupe
            GU: "USD", // Guam
            GT: "GTQ", // Guatemala
            GG: "GBP", // Guernsey
            GN: "GNF", // Guinea
            GW: "XOF", // Guinea-Bissau
            GY: "GYD", // Guyana
            HT: "HTG", // Haiti
            HM: "AUD", // Heard Island and McDonald Islands
            VA: "EUR", // Holy See
            HN: "HNL", // Honduras
            HK: "HKD", // Hong Kong
            HU: "HUF", // Hungary
            IS: "ISK", // Iceland
            IN: "INR", // India
            ID: "IDR", // Indonesia
            IR: "IRR", // Iran
            IQ: "IQD", // Iraq
            IE: "EUR", // Ireland
            IM: "GBP", // Isle of Man
            IL: "ILS", // Israel
            IT: "EUR", // Italy
            JM: "JMD", // Jamaica
            JP: "JPY", // Japan
            JE: "GBP", // Jersey
            JO: "JOD", // Jordan
            KZ: "KZT", // Kazakhstan
            KE: "KES", // Kenya
            KI: "AUD", // Kiribati
            KP: "KPW", // Korea (North)
            KR: "KRW", // Korea (South)
            KW: "KWD", // Kuwait
            KG: "KGS", // Kyrgyzstan
            LA: "LAK", // Laos
            LV: "EUR", // Latvia
            LB: "LBP", // Lebanon
            LS: "LSL", // Lesotho
            LR: "LRD", // Liberia
            LY: "LYD", // Libya
            LI: "CHF", // Liechtenstein
            LT: "EUR", // Lithuania
            LU: "EUR", // Luxembourg
            MO: "MOP", // Macao
            MG: "MGA", // Madagascar
            MW: "MWK", // Malawi
            MY: "MYR", // Malaysia
            MV: "MVR", // Maldives
            ML: "XOF", // Mali
            MT: "EUR", // Malta
            MH: "USD", // Marshall Islands
            MQ: "EUR", // Martinique
            MR: "MRU", // Mauritania
            MU: "MUR", // Mauritius
            YT: "EUR", // Mayotte
            MX: "MXN", // Mexico
            FM: "USD", // Micronesia
            MD: "MDL", // Moldova
            MC: "EUR", // Monaco
            MN: "MNT", // Mongolia
            ME: "EUR", // Montenegro
            MS: "XCD", // Montserrat
            MA: "MAD", // Morocco
            MZ: "MZN", // Mozambique
            MM: "MMK", // Myanmar
            NA: "NAD", // Namibia
            NR: "AUD", // Nauru
            NP: "NPR", // Nepal
            NL: "EUR", // Netherlands
            NC: "XPF", // New Caledonia
            NZ: "NZD", // New Zealand
            NI: "NIO", // Nicaragua
            NE: "XOF", // Niger
            NG: "NGN", // Nigeria
            NU: "NZD", // Niue
            NF: "AUD", // Norfolk Island
            MK: "MKD", // North Macedonia
            MP: "USD", // Northern Mariana Islands
            NO: "NOK", // Norway
            OM: "OMR", // Oman
            PK: "PKR", // Pakistan
            PW: "USD", // Palau
            PS: "ILS", // Palestine
            PA: "PAB", // Panama
            PG: "PGK", // Papua New Guinea
            PY: "PYG", // Paraguay
            PE: "PEN", // Peru
            PH: "PHP", // Philippines
            PN: "NZD", // Pitcairn
            PL: "PLN", // Poland
            PT: "EUR", // Portugal
            PR: "USD", // Puerto Rico
            QA: "QAR", // Qatar
            RE: "EUR", // Réunion
            RO: "RON", // Romania
            RU: "RUB", // Russia
            RW: "RWF", // Rwanda
            BL: "EUR", // Saint Barthélemy
            SH: "SHP", // Saint Helena, Ascension and Tristan da Cunha
            KN: "XCD", // Saint Kitts and Nevis
            LC: "XCD", // Saint Lucia
            MF: "EUR", // Saint Martin (French part)
            PM: "EUR", // Saint Pierre and Miquelon
            VC: "XCD", // Saint Vincent and the Grenadines
            WS: "WST", // Samoa
            SM: "EUR", // San Marino
            ST: "STN", // Sao Tome and Principe
            SA: "SAR", // Saudi Arabia
            SN: "XOF", // Senegal
            RS: "RSD", // Serbia
            SC: "SCR", // Seychelles
            SL: "SLL", // Sierra Leone
            SG: "SGD", // Singapore
            SX: "ANG", // Sint Maarten (Dutch part)
            SK: "EUR", // Slovakia
            SI: "EUR", // Slovenia
            SB: "SBD", // Solomon Islands
            SO: "SOS", // Somalia
            ZA: "ZAR", // South Africa
            GS: "GBP", // South Georgia and the South Sandwich Islands
            SS: "SSP", // South Sudan
            ES: "EUR", // Spain
            LK: "LKR", // Sri Lanka
            SD: "SDG", // Sudan
            SR: "SRD", // Suriname
            SJ: "NOK", // Svalbard and Jan Mayen
            SE: "SEK", // Sweden
            CH: "CHF", // Switzerland
            SY: "SYP", // Syrian Arab Republic
            TW: "TWD", // Taiwan
            TJ: "TJS", // Tajikistan
            TZ: "TZS", // Tanzania
            TH: "THB", // Thailand
            TL: "USD", // Timor-Leste
            TG: "XOF", // Togo
            TK: "NZD", // Tokelau
            TO: "TOP", // Tonga
            TT: "TTD", // Trinidad and Tobago
            TN: "TND", // Tunisia
            TR: "TRY", // Turkey
            TM: "TMT", // Turkmenistan
            TC: "USD", // Turks and Caicos Islands
            TV: "AUD", // Tuvalu
            UG: "UGX", // Uganda
            UA: "UAH", // Ukraine
            AE: "AED", // United Arab Emirates
            GB: "GBP", // United Kingdom
            US: "USD", // United States
            UM: "USD", // United States Minor Outlying Islands
            UY: "UYU", // Uruguay
            UZ: "UZS", // Uzbekistan
            VU: "VUV", // Vanuatu
            VE: "VES", // Venezuela
            VN: "VND", // Viet Nam
            VG: "USD", // Virgin Islands (British)
            VI: "USD", // Virgin Islands (U.S.)
            WF: "XPF", // Wallis and Futuna
            EH: "MAD", // Western Sahara
            YE: "YER", // Yemen
            ZM: "ZMW", // Zambia
            ZW: "ZWL", // Zimbabwe
          };

          // Get currency code based on country
          let userCurrencyCode = "KES"; // Default

          if (
            countryCurrencyMap[
              locationData.country_code as keyof typeof countryCurrencyMap
            ]
          ) {
            userCurrencyCode =
              countryCurrencyMap[
                locationData.country_code as keyof typeof countryCurrencyMap
              ];
          } else if (locationData.currency) {
            // Use the currency directly from the IP API if available
            userCurrencyCode = locationData.currency;
          }

          // Get exchange rate for this currency
          if (currencyData.rates[userCurrencyCode]) {
            setCurrency(userCurrencyCode);
            setExchangeRate(currencyData.rates[userCurrencyCode]);
          }
        }
      } catch (error) {
        console.error("Error setting up currencies:", error);
        // Fallback to KSH if detection fails
        setCurrency("KSH");
        setExchangeRate(1);
      } finally {
        setLoading(false);
      }
    };

    setupCurrencies();
  }, []);

  // Handle manual currency selection
  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = e.target.value;
    const selectedCurrencyData = availableCurrencies.find(
      (c) => c.code === selectedCurrency
    );

    if (selectedCurrencyData) {
      setCurrency(selectedCurrencyData.code);
      setExchangeRate(selectedCurrencyData.rate);
    }
  };

  // Function to format price based on user's currency
  const formatPrice = (kshPrice: string | number) => {
    // Parse the price string to extract the numeric value
    let numericValue;
    if (typeof kshPrice === "string") {
      // Handle price ranges ("70,000 to 150,000")
      if (kshPrice.includes("to")) {
        const parts = kshPrice
          .split("to")
          .map((part) => parseFloat(part.replace(/[^0-9.]/g, "")));

        // Convert each part and format back to range
        const convertedParts = parts.map((part) =>
          formatCurrency(part * exchangeRate)
        );

        return `${convertedParts[0]} to ${convertedParts[1]}`;
      } else {
        // Handle single price
        numericValue = parseFloat(kshPrice.replace(/[^0-9.]/g, ""));
      }
    } else {
      numericValue = kshPrice;
    }

    // Convert and format
    return formatCurrency(numericValue * exchangeRate);
  };

  // Helper to format currency with proper separators
  const formatCurrency = (value: number) => {
    // Common currency formats
    const currencyFormats: Record<string, { locale: string; symbol: string }> =
      {
        USD: { locale: "en-US", symbol: "$" },
        GBP: { locale: "en-GB", symbol: "£" },
        EUR: { locale: "de-DE", symbol: "€" },
        KSH: { locale: "en-KE", symbol: "KSH " },
        KES: { locale: "en-KE", symbol: "KSH " },
        NGN: { locale: "en-NG", symbol: "₦" },
        ZAR: { locale: "en-ZA", symbol: "R" },
        INR: { locale: "en-IN", symbol: "₹" },
        CAD: { locale: "en-CA", symbol: "C$" },
        AUD: { locale: "en-AU", symbol: "A$" },
        JPY: { locale: "ja-JP", symbol: "¥" },
        CNY: { locale: "zh-CN", symbol: "¥" },
        RUB: { locale: "ru-RU", symbol: "₽" },
        BRL: { locale: "pt-BR", symbol: "R$" },
        CHF: { locale: "de-CH", symbol: "CHF " },
        // Add more as needed
      };

    const format = currencyFormats[currency] || {
      locale: "en-US",
      symbol: currency + " ",
    };

    // Format with appropriate thousand separators
    const numberFormat = new Intl.NumberFormat(format.locale, {
      maximumFractionDigits: currency === "JPY" ? 0 : 2,
    });

    return `${format.symbol}${numberFormat.format(value)}`;
  };

  if (!mounted) return null;

  // Services categorized by type
  const services = [
    {
      category: "WEBSITES",
      options: [
        {
          name: "Static Sites",
          price: "10,000 to 25,000",
          description: "Simple, fast-loading websites with fixed content.",
          features: [
            "Landing Pages",
            "Business Sites",
            "Portfolios",
            "Blazing Fast",
            "SEO Optimized",
          ],
          note: "Can vary depending with complexity",
          popular: false,
        },
        {
          name: "Dynamic Sites",
          price: "25,000 to 50,000",
          description: "Interactive websites with database integration.",
          features: [
            "Content Management",
            "User Accounts",
            "Admin Dashboard",
            "E-commerce Capabilities",
            "API Integration",
          ],
          note: "Can vary depending with complexity",
          popular: true,
        },
      ],
    },
    {
      category: "SYSTEM APPLICATIONS",
      options: [
        {
          name: "Custom Software",
          price: "70,000 to 150,000",
          description: "Tailored software solutions for your business needs.",
          features: [
            "Database Management",
            "User Authentication",
            "Custom Workflows",
            "Reporting Tools",
            "Third-party Integrations",
          ],
          note: "Can vary depending with complexity",
          popular: false,
        },
      ],
    },
    {
      category: "MOBILE APPLICATIONS",
      options: [
        {
          name: "Hybrid Apps",
          price: "50,000",
          description: "Cross-platform mobile applications.",
          features: [
            "iOS & Android Compatible",
            "Single Codebase",
            "Faster Development",
            "Cost-Effective",
            "Easy Updates",
          ],
          note: "Can vary depending with complexity",
          popular: false,
        },
        {
          name: "Native Apps",
          price: "150,000",
          description:
            "Platform-specific applications with optimal performance.",
          features: [
            "Platform-Specific",
            "Enhanced Performance",
            "Full Device Features Access",
            "Better User Experience",
            "Offline Functionality",
          ],
          note: "Can vary depending with complexity",
          popular: true,
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Modern Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-background/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/favicon.ico"
              alt="Logo"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-lg font-semibold hidden sm:inline-block">
              Musa Mwangea
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#projects"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/rates"
                className="text-sm font-medium text-primary relative"
              >
                <span>Rates</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
              </Link>
              <Link
                href="/#contact"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-3 p-4">
              <Link
                href="/"
                className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#projects"
                className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/rates"
                className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Rates
              </Link>
              <Link
                href="/#contact"
                className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Pricing Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Service <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transparent pricing for high-quality digital solutions tailored to
              your needs
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-sm">Location: {countryCode}</span>
              </div>

              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
                <label htmlFor="currency-select" className="text-sm">
                  Currency:
                </label>
                <select
                  id="currency-select"
                  className="text-sm bg-transparent border-none focus:ring-0 focus:outline-none"
                  value={currency}
                  onChange={handleCurrencyChange}
                  disabled={loading}
                >
                  {availableCurrencies.map((curr) => (
                    <option key={curr.code} value={curr.code}>
                      {curr.code}
                    </option>
                  ))}
                </select>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            {services.map((serviceCategory, index) => (
              <div key={index} className="space-y-8">
                <div className="text-center">
                  <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-medium">
                    {serviceCategory.category}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {serviceCategory.options.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className={`relative border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg ${
                        service.popular
                          ? "border-2 border-primary"
                          : "border-border"
                      }`}
                    >
                      {service.popular && (
                        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                          POPULAR
                        </div>
                      )}

                      <div className="p-8">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold mb-2">
                            {service.name}
                          </h3>
                          <p className="text-muted-foreground">
                            {service.description}
                          </p>
                        </div>

                        <div className="mb-8">
                          <p className="text-3xl font-bold mb-1">
                            {formatPrice(service.price)}
                          </p>
                          {service.note && (
                            <p className="text-sm text-muted-foreground italic">
                              * {service.note}
                            </p>
                          )}
                        </div>

                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start gap-3"
                            >
                              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Button className="w-full group" size="lg">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Custom Quote CTA */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">
                Need something custom?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                All projects are tailored to your specific requirements. Contact
                me for a personalized quote.
              </p>
              <Link href="/#contact">
                <Button size="lg" className="px-8">
                  Request Custom Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="/favicon.ico"
                alt="Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-medium"></span>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
