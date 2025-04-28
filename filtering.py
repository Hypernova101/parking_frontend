import pandas as pd

# Load the dataset
df = pd.read_csv('datasets/data.csv')

# Convert start and expire times to datetime
df['date_trans_start'] = pd.to_datetime(df['date_trans_start'], errors='coerce')
df['date_meter_expire'] = pd.to_datetime(df['date_meter_expire'], errors='coerce')

# Calculate the duration in minutes
df['duration_minutes'] = (df['date_meter_expire'] - df['date_trans_start']).dt.total_seconds() / 60

# Filter out any rows with 0 or negative duration (invalid data)
df = df[df['duration_minutes'] > 0]

# Calculate the rate per minute
df['rate_per_minute'] = df['trans_amt'] / df['duration_minutes']

# Group by pole_id and calculate average rate per pole
pole_rates = df.groupby('pole_id')['rate_per_minute'].mean()

# Round the rates to make grouping cleaner
rounded_rates = pole_rates.round(4)

# Find the most frequent rates
top_rates = rounded_rates.value_counts().head(4)

# Output
for rate, count in top_rates.items():
    print(f"Rate: ${rate}/minute - {count} meters")

## Output:
# Rate: $2.6633/minute - 4 meters
# Rate: $2.4423/minute - 4 meters
# Rate: $3.4803/minute - 4 meters
# Rate: $2.4405/minute - 4 meters