import pandas as pd

# Read CSV file from a folder
cc = pd.read_csv('CountryCode.csv', encoding="utf-16")
fe = pd.read_csv('FlagEmoji.csv', encoding="utf-16")

cc['Country'] = cc['Country'].astype('string')
fe['Country'] = fe['Country'].astype('string')

newdf = cc.merge(fe, on="Country")
newdf = newdf.sort_values('Country')

dictFile = open('dict.txt', 'w', encoding="utf-16")
dictFile.write("dict = {\n")
for index, row in newdf.iterrows():
    code = row['Code']
    country = row['Country']
    currency = row['Currency']
    symbol = row['Symbol']
    unicode = row['Unicode']
    dictStr = code + ': { "Code":"' + country + '", ' \
                     '"Currency":"' + currency + '",' \
                     '"Symbol":"' + symbol + '",' \
                     '"Unicode":"' + unicode + '"},\n'
    dictFile.write(dictStr)
dictFile.write("}")
dictFile.close()