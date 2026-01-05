"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronDown, Globe, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import Image from "next/image";
import type { ServiceCategory } from "@/lib/data/services";

interface CurrencyData {
  code: string;
  rate: number;
}

interface RatesClientProps {
  services: ServiceCategory[];
}

export default function RatesClient({ services }: RatesClientProps) {
  const [mounted, setMounted] = useState(false);
  const [currency, setCurrency] = useState("KES");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [countryCode, setCountryCode] = useState("KE");
  const [loading, setLoading] = useState(true);
  const [availableCurrencies, setAvailableCurrencies] = useState<CurrencyData[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const setupCurrencies = async () => {
      try {
        setLoading(true);
        const locationResponse = await fetch("https://ipapi.co/json/");
        const locationData = await locationResponse.json();
        setCountryCode(locationData.country_code || "KE");

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

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className="fixed w-full top-0 z-50 bg-background/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/favicon.ico"
              alt="Musa Mwangea Logo"
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
                href="/projects"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/rates"
                className="text-sm font-medium text-primary relative"
                aria-current="page"
              >
                <span>Rates</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
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
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
                href="/projects"
                className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/rates"
                className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
                aria-current="page"
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

      {/* Header */}
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
                <Globe className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="text-sm">Location: {countryCode}</span>
              </div>

              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
                <label htmlFor="currency-select" className="text-sm">
                  Currency:
                </label>
                <select
                  id="currency-select"
                  className="text-sm bg-transparent border-none focus:ring-0 focus:outline-none cursor-pointer"
                  value={currency}
                  onChange={handleCurrencyChange}
                  disabled={loading}
                  aria-label="Select currency"
                >
                  {availableCurrencies.map((curr) => (
                    <option key={curr.code} value={curr.code}>
                      {curr.code}
                    </option>
                  ))}
                </select>
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-20 px-6" aria-labelledby="services-heading">
        <h2 id="services-heading" className="sr-only">
          Available Services
        </h2>
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            {services.map((serviceCategory, index) => (
              <div key={index} id={serviceCategory.slug} className="space-y-8 scroll-mt-24">
                <div className="text-center">
                  <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-medium">
                    {serviceCategory.category}
                  </span>
                  {serviceCategory.description && (
                    <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                      {serviceCategory.description}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {serviceCategory.options.map((service, serviceIndex) => (
                    <article
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

                        <ul className="space-y-3 mb-8" aria-label="Features">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <Check
                                className="h-5 w-5 text-primary mt-0.5 flex-shrink-0"
                                aria-hidden="true"
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Button asChild className="w-full group" size="lg">
                          <Link href="/#contact">
                            Get Started
                            <ArrowRight
                              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                              aria-hidden="true"
                            />
                          </Link>
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">
                Need something custom?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                All projects are tailored to your specific requirements. Contact
                me for a personalized quote.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="px-8">
                  <Link href="/#contact">Request Custom Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/projects">View My Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="/favicon.ico"
                alt="Musa Mwangea Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-medium">Musa Mwangea</span>
            </Link>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/#contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
              <span>© {new Date().getFullYear()} All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

