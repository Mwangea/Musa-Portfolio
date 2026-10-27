"use client";

import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import type { ServiceCategory } from "@/lib/data/services";

interface CurrencyData {
  code: string;
  rate: number;
}

interface RatesClientProps {
  services: ServiceCategory[];
}

export default function RatesClient({ services }: RatesClientProps) {
  const [currency, setCurrency] = useState("KES");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [loading, setLoading] = useState(true);
  const [availableCurrencies, setAvailableCurrencies] = useState<CurrencyData[]>([]);

  useEffect(() => {
    const setupCurrencies = async () => {
      try {
        setLoading(true);
        const locationResponse = await fetch("https://ipapi.co/json/");
        const locationData = await locationResponse.json();

        const currencyResponse = await fetch("https://open.er-api.com/v6/latest/KES");
        const currencyData = await currencyResponse.json();

        if (currencyData.rates) {
          const currencies: CurrencyData[] = Object.keys(currencyData.rates).map(
            (code) => ({
              code,
              rate: currencyData.rates[code],
            })
          );
          setAvailableCurrencies(currencies);

          const countryCurrencyMap: Record<string, string> = {
            KE: "KES",
            US: "USD",
            GB: "GBP",
            DE: "EUR",
            FR: "EUR",
            NG: "NGN",
            ZA: "ZAR",
            IN: "INR",
            CA: "CAD",
            AU: "AUD",
            JP: "JPY",
            CN: "CNY",
          };

          const userCurrencyCode =
            countryCurrencyMap[locationData.country_code] ||
            locationData.currency ||
            "KES";

          if (currencyData.rates[userCurrencyCode]) {
            setCurrency(userCurrencyCode);
            setExchangeRate(currencyData.rates[userCurrencyCode]);
          }
        }
      } catch (error) {
        console.error("Error setting up currencies:", error);
        setCurrency("KES");
        setExchangeRate(1);
      } finally {
        setLoading(false);
      }
    };
    setupCurrencies();
  }, []);

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

  const formatPrice = (kshPrice: string | number) => {
    let numericValue: number;
    if (typeof kshPrice === "string") {
      if (kshPrice.includes("to")) {
        const parts = kshPrice
          .split("to")
          .map((part) => parseFloat(part.replace(/[^0-9.]/g, "")));
        const convertedParts = parts.map((part) =>
          formatCurrency(part * exchangeRate)
        );
        return `${convertedParts[0]} to ${convertedParts[1]}`;
      } else {
        numericValue = parseFloat(kshPrice.replace(/[^0-9.]/g, ""));
      }
    } else {
      numericValue = kshPrice;
    }
    return formatCurrency(numericValue * exchangeRate);
  };

  const formatCurrency = (value: number) => {
    const currencyFormats: Record<string, { locale: string; symbol: string }> = {
      USD: { locale: "en-US", symbol: "$" },
      GBP: { locale: "en-GB", symbol: "£" },
      EUR: { locale: "de-DE", symbol: "€" },
      KES: { locale: "en-KE", symbol: "KES " },
      NGN: { locale: "en-NG", symbol: "₦" },
      ZAR: { locale: "en-ZA", symbol: "R" },
      INR: { locale: "en-IN", symbol: "₹" },
      CAD: { locale: "en-CA", symbol: "C$" },
      AUD: { locale: "en-AU", symbol: "A$" },
      JPY: { locale: "ja-JP", symbol: "¥" },
      CNY: { locale: "zh-CN", symbol: "¥" },
    };

    const format = currencyFormats[currency] || {
      locale: "en-US",
      symbol: currency + " ",
    };
    const numberFormat = new Intl.NumberFormat(format.locale, {
      maximumFractionDigits: currency === "JPY" ? 0 : 2,
    });
    return `${format.symbol}${numberFormat.format(value)}`;
  };

  const currencyOptions =
    availableCurrencies.length > 0
      ? availableCurrencies
      : [{ code: "KES", rate: 1 }];

  return (
    <main className="min-h-screen bg-background px-6 pb-20 pt-28">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Rates
            </p>
            <h1 className="mt-3 text-5xl md:text-6xl">Clear prices, in shillings.</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              These ranges cover most projects. A written quote follows once the scope is clear.
              Converted amounts are approximate.
            </p>
          </div>

          <div className="flex items-center gap-3 border border-border px-4 py-3">
            <label htmlFor="currency-select" className="text-sm text-muted-foreground">
              Currency
            </label>
            <select
              id="currency-select"
              className="bg-transparent text-sm focus:outline-none"
              value={currency}
              onChange={handleCurrencyChange}
              disabled={loading && availableCurrencies.length === 0}
              aria-label="Select currency"
            >
              {currencyOptions.map((curr) => (
                <option key={curr.code} value={curr.code}>
                  {curr.code}
                </option>
              ))}
            </select>
            <ChevronDown className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          </div>
        </header>

        <div className="mt-16 space-y-16">
          {services.map((serviceCategory) => (
            <section key={serviceCategory.slug} id={serviceCategory.slug} className="scroll-mt-24">
              <div className="max-w-xl">
                <h2 className="text-3xl capitalize">{serviceCategory.category.toLowerCase()}</h2>
                {serviceCategory.description && (
                  <p className="mt-2 text-muted-foreground">{serviceCategory.description}</p>
                )}
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {serviceCategory.options.map((service) => (
                  <article key={service.name} className="flex flex-col border border-border p-6 md:p-8">
                    <div>
                      <h3 className="text-2xl">{service.name}</h3>
                      {service.popular && (
                        <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-primary">
                          Often chosen
                        </p>
                      )}
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{service.description}</p>
                    <p className="mt-6 text-3xl">{formatPrice(service.price)}</p>
                    {service.note && (
                      <p className="mt-1 text-sm text-muted-foreground">{service.note}</p>
                    )}
                    <ul className="mt-6 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/#contact"
                      className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                    >
                      Start with this
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-20 border-t border-border pt-12">
          <h2 className="text-3xl md:text-4xl">Need a custom scope?</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            If the work does not fit a package, send the brief. The quote is based on what actually has to be built.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Request a quote
            </Link>
            <Link
              href="/projects"
              className="inline-flex rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-accent"
            >
              See the work
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
