rates = {
    ("THB", "USD"): 0.031,
    ("THB", "JPY"): 4.77,
    ("THB", "GBP"): 0.024,
    ("USD", "THB"): 32.35,
    ("USD", "JPY"): 154.19,
    ("USD", "GBP"): 0.76
}

def inverter(money, currency, tocurrency):
    currency = currency.upper()
    tocurrency = tocurrency.upper()

    rate = rates.get((currency, tocurrency))
    if rate is None:
        return f"Error: No conversion rate available for {currency} to {tocurrency}"

    result = money * rate
    return f"{result:,.2f} {tocurrency}"

print(inverter(230, "thb", "usd"))
print(inverter(100, "usd", "jpy"))
print(inverter(500, "thb", "gbp"))
print(inverter(200, "usd", "dkr"))
