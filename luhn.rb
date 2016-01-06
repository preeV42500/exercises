class Luhn
  attr_accessor :number

  def initialize(number)
    @number = number
  end

  def addends
  arr = []
  num = @number.to_s
  idx = -1 # start with the rightmost index
  until idx.abs > num.size
    digit = num.slice(idx).to_i # convert back to an integer,
    if idx.abs % 2 == 0 # check if index is even, if so apply Luhn formula to it
      digit *= 2
      digit -= 9 if digit >= 10
    end
    arr.unshift(digit)
    idx -= 1
  end
  arr
  end

  def checksum
    addends.inject(&:+)
  end

  def valid?
    checksum % 10 == 0
  end

  def self.create(num)
    # multiply number by 10, compute checksum
    # replace rightmost digit(0) with number needed to make checksum valid unless checksum is already valid
    temp_num = num * 10
    new_luhn = Luhn.new(temp_num)
    new_luhn.valid? ? temp_num : temp_num + (10 - new_luhn.checksum % 10)
  end
end
