import pandas as pd


df = pd.read_csv('diabete_prediction_dataset.csv')


# Encode smoking_history feature
df['smoking_history'] = df['smoking_history'].map({'never': 0, 'current': 1, 'former': 2, 'ever': 3, 'not current': 4, 'No Info': 5})

# Convert gender feature to numerical values (assuming binary encoding)
df['gender'] = df['gender'].map({'Female': 0, 'Male': 1})

# Create age groups based on age ranges
age_bins = [0, 18, 35, 50, 65, 100]
age_labels = ['0-18', '19-35', '36-50', '51-65', '65+']
df['age_group'] = pd.cut(df['age'], bins=age_bins, labels=age_labels)

# Display the updated DataFrame with new features
print("lala")
print(df.head())


